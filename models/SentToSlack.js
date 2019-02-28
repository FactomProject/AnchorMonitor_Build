const mongoose = require('mongoose');

const SentToSlackSchema = new mongoose.Schema({
    notification_time: {
        type: Date,
    },
    highest_height: {
        type: String,
    },
});

module.exports = mongoose.model('SentToSlack', SentToSlackSchema)