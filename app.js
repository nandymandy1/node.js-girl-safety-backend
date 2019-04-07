// Bring in all the dependencies
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');


// to enable the cross origin request
const cors = require('cors');
const passport = require('passport');
// Bring in the socket.io
const socket = require('socket.io');


// Initailize the application
const app = express();


const port = process.env.PORT || 5000;

// Setup the Database
const db = require('./config/db').mongoURI;

// Connecting with the databse
mongoose.connect(db, {
    useNewUrlParser: true
}).then(() => {
    console.log(`Database Connected Successfully ${db}`)
}).catch(err => {
    console.log(`Error in connecting Database ${err}`)
});

// Setup the middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
// Passport Config
require('./config/passport')(passport);

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes References goes here
// App routes
const users = require('./routes/api/users');
app.use('/api/users', users);

// Posts Routes
const posts = require('./routes/api/posts');
app.use('/api/posts', posts);

const server = app.listen(port, () => {
    console.log(`Server started on the port ${port}`);
});


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Socket IO Setup
const io = socket.listen(server);

// io.on('connection', socket => {
//     console.log('user connected');
//     socket.on('urgent-mode', (message) => {
//         console.log(message);
//     });
// });