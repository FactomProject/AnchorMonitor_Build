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

module.exports = mongoose.model('FactomBlocks', FactomBlocksSchema)