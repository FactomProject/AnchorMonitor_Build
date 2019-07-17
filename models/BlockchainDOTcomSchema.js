const mongoose = require('mongoose');

const BlockchainAddSocket = new mongoose.Schema({
    script: {
        type: String,
        unique: true,
    },
    keymr: {
        type: String,
        unique: true,
    },
    height: {
        type: Number,
        unique: true,
    },
    btc_trans_hash: {
        type: String,
        unique: true,
    },
    time: {
        type: Number,
        unique: false,
    },
})

module.exports = mongoose.model('BlockchainDOTcom', BlockchainAddSocket)