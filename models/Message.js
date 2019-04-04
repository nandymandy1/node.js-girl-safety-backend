const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Message Schema
const MessageSchema = new Schema({
    fromUser: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    toUser: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Message = mongoose.model('messages', MessageSchema);