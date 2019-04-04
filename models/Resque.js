const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Rescue Schema
const RescueSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    name: {
        type: String,
        required: true
    },
    lat: {
        type: Number,
        required: true
    },
    lng: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Rescue = mongoose.model('rescue', RescueSchema);