const mongoose = require('mongoose');

const NotificationsOffSchema = new mongoose.Schema({
    notificationtime: {
        type: String,
    },
    time: {
        type: String,
    },
});

module.exports = mongoose.model('NotificationsOff', NotificationsOffSchema)