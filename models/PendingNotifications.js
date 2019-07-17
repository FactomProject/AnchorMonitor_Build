const mongoose = require('mongoose');

const PendingNotificationsSchema = new mongoose.Schema({
    notificationtime: {
        type: String,
    },
    time: {
        type: Date,
    },
});

module.exports = mongoose.model('PendingNotifications', PendingNotificationsSchema)