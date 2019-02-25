const mongoose = require('mongoose');

const PendingNotificationsSchema = new mongoose.Schema({
    notificationtime: {
        type: String,
    },
    time: {
        type: String,
    },
});

module.exports = mongoose.model('PendingNotifications', PendingNotificationsSchema)