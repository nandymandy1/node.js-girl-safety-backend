const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const key = require('../../config/db').secret;
const passport = require('passport');
const multer = require('multer');
const http = require('http');
var urlencode = require('urlencode');

// Load User Model
const User = require('../../models/User');
const Sos = require('../../models/Sos');

// Multer storage startegy
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images/');
    },
    filename: function (req, file, cb) {
        var date = new Date();
        var timestamp = date.getTime()
        let fileName = `${timestamp}${file.originalname}`
        cb(null, fileName);
    }
});

// File types
const fileFilter = (req, file, cb) => {
    cb(null, false);
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png' || file.mimetype == 'image/jpg') {
        // then store the file
        cb(null, true);
    } else {
        // reject the file
        cb(null, false);
    }
};

// Multer Configuration
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 3
    },
    fileFilter: fileFilter
});

/**
 * @route GET api/users/register
 * @desc Register User / Saving it to the Database
 * @access Public
 */
router.post('/register', (req, res) => {
    let errors = {};
    // Find the unique Email address
    User.findOne({
        email: req.body.email
    }).then(user => {
        if (user) {
            // console.log('Hello');
            errors.email = 'Email already exists.';
            return res.status(400).json(errors);
        } else {
            User.findOne({
                username: req.body.username
            }).then(user => {
                if (user) {
                    errors.username = 'Username taken.';
                    return res.status(400).json(errors);
                } else {
                    const newUser = new User({
                        name: req.body.name,
                        email: req.body.email,
                        username: req.body.username,
                        address: req.body.address,
                        phone: req.body.phone,
                        password: req.body.password,
                        adhar: req.body.adhar
                    });

                    // Hash the password and Save the User
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if (err) throw err;
                            newUser.password = hash;
                            newUser.save().then(user => {
                                return res.json({
                                    message: 'User registration is successful',
                                    success: true
                                });
                            }).catch(err => {
                                console.log(err);
                            });
                        });
                    });
                }
            })
        }
    });
});

/**
 * @route GET api/users/login
 * @desc Login User / Sending the login Token back
 * @access Public
 */
router.post('/login', (req, res) => {
    let errors = {};
    const {
        username,
        password
    } = req.body;

    // Find the user by email
    User.findOne({
        username
    }).then(user => {
        if (!user) {
            return res.json({
                success: false,
                message: "Username is not found."
            });
        }
        // Match the password
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                // Now send the auth token back b generating it and sign it
                // JWT Payload
                const payload = {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    userImage: user.userImage
                }
                jwt.sign(
                    payload,
                    key, {
                        expiresIn: 604800
                    }, (err, token) => {
                        res.json({
                            success: true,
                            token: `Bearer ${token}`,
                            message: "You are successfully logged in."
                        });
                    });
            } else {
                return res.json({
                    success: false,
                    message: "Incorrect password."
                });
            }
        });
    });
});

/**
 * @route api/users/profile-picture
 * @desc 
 * @access Private
 */
router.post('/profile-picture', passport.authenticate('jwt', {
    session: false
}), upload.single('profilePicture'), (req, res) => {
    console.log(req.file);
    let filepath = req.file.path;
    filepath = filepath.split("public").pop()
    User.findById(req.user._id)
        .then(user => {
            user.userImage = filepath
            user.save()
                .then(user => {
                    return res.json(user);
                });
        });
});

/**
 * @route GET api/users/profile
 * @desc Get the authenticated user profile
 * @access Private
 */
router.get('/profile', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    return res.json(req.user);
});

/**
 * @route POST api/users/sos
 * @desc  Send the SOS signal to the nearby phones
 * @access Private
 */
router.post('/radar-mode-enable', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    let {
        lat,
        lng
    } = req.body;
    let newSos = new Sos({
        lat,
        lng,
        name: req.user.name,
        user: req.user._id
    });
    newSos.save().then(sos => {
        return res.status(201).json({
            sos,
            message: "Help is on the way. Till then try to avoid any sort of invoilent activities."
        });
    }).catch(err => res.status(400).json(err));
});

/**
 * @route GET api/users/sos
 * @desc  Get all the Radar messages
 * @access Private
 */
router.get('/radar-mode', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    Sos.find({
            active: true
        })
        .populate('user', ['name', 'userImage'])
        .then(calls => {
            return res.json({
                'sos': calls
            });
        });
});

/**
 * @route GET api/users/sos/:id
 * @desc  Get a single radar user by Id
 * @access Private
 */
router.get('/radar-mode/:id', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    Sos.findById(res.params.id)
        .populate('user', ['name', 'userImage'])
        .then(calls => {
            return res.json({
                'sos': calls
            });
        });
});

// Get the user's radar status
router.get('/radar-status', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    user_id = req.user._id
    Sos.find({
        user: user_id
    }).sort({
        date: -1
    }).then(soss => {
        return res.json(soss[0]);
    });
});

// Disable the radar
router.post('/radar-disable', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    Sos.find({
        user: req.user._id
    }).sort({
        date: -1
    }).then(soss => {
        soss[0].active = false;
        soss[0].save();
        return res.json(soss[0]);
    });
});

// Add Trust Contacts
router.post('/add-contacts', passport.authenticate('jwt', {
    session: false
}), (req, res) => {
    User.findById(req.user._id)
        .then(user => {
            let newContact = {
                name: req.body.name,
                phone: req.body.phone
            }
            user.trustContacts.unshift(newContact);
            user.save().then(user => res.json({
                success: true,
                message: "Contact added successfully."
            }));
        });
});

// Urgent mode enable for the sms service on the mobile
router.post('/urgent-mode', passport.authenticate('jwt', {
    session: false
}), (req, res) => {

    // Get the contacts from the database
    User.findById(req.user._id)
        .then(user => {
            let contacts = user.trustContacts;
            contacts.map(contact => {
                let message = urlencode(`
                    Dear ${contact.name}, Your Contact ${req.user.name} is in need of the urgent help due to some risky factors,
                    Please follow the given location coordinates ${req.body.lat}, ${req.body.lng}. We have also informed to the local authorities.
                `);
                let toNumber = '+91' + contact.number;
                let username = req.user.name;
                let hash = 'ThWK94szfFg-8bS2DdO31HOlNhXUelOetNotHRqmMB'; // The hash key could be found under Help->All Documentation->Your hash key. Alternatively you can use your Textlocal password in plain text.
                let sender = "Girl's Safety Center";
                let data = 'username=' + username + '&hash=' + hash + '&sender=' + sender + '&numbers=' + toNumber + '&message=' + message;
                var options = {
                    host: 'api.textlocal.in',
                    path: '/send?' + data
                };
                callback = function (response) {
                    var str = ''; //another chunk of data has been recieved, so append it to `str`
                    response.on('data', function (chunk) {
                        str += chunk;
                    }); //the whole response has been recieved, so we just print it out here
                    response.on('end', function () {
                        console.log(str);
                    });
                } //console.log('hello js'))
                http.request(options, callback).end(); //url encode instalation need to use $ npm install urlencode
                console.log(contact);
            });
            return res.json({
                success: true
            });
        });
});

module.exports = router;