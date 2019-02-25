const mongoose = require('mongoose');

const SentToSlackSchema = new mongoose.Schema({
    notificationtime: {
        type: String,
    },
    time: {
        type: String,
    },
});

module.exports = mongoose.model('SentToSlack', SentToSlackSchema)