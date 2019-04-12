const mongoose = require('mongoose');

const BalanceToSlackSchema = new mongoose.Schema({
    notification_time: {
        type: Date,
    },
    balance: {
        type: Number,
    },
    next_teir: {
        type: Number,
    }
});

module.exports = mongoose.model('BalanceToSlack', BalanceToSlackSchema)