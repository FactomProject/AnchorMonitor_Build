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
});

module.exports = mongoose.model('FactomBlocks', FactomBlocksSchema)