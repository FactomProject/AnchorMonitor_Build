const mongoose = require('mongoose');

const FactomBlocksSchema = new mongoose.Schema({
    height: {
        type: Number,
        unique: true,
    },
    keymr: {
        type: String,
        trim: true,
    },
    started_at: {
        type: String,
        trim: true,
    },
    btc_hash: {
        type: String,
        unique: true,
        sparse: true,
    },
});

const BlockchainAddSocket = new mongoose.Schema({
    script: {
        type: Number,
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

module.exports = mongoose.model('FactomBlocks', FactomBlocksSchema)