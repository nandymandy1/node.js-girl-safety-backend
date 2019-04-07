// mongoURI: "mongodb://localhost:27017/girl_safety",
// secret: 'yoursecret'
if (process.env.NODE_ENV === 'production') {
    module.exports = {
        mongoURI: 'mongodb://nandymandy:nandymandy@ds239368.mlab.com:39368/mean-auth-app',
        secret: 'yoursecret'
    }
} else {
    module.exports = {
        mongoURI: 'mongodb://localhost:27017/girl_safety',
        secret: 'yoursecret'
    }
}