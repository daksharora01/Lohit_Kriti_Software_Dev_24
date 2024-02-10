const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    admins: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    thumbnail: {
        type: String,
        required: true
    }
});

const Groups = mongoose.model('Groups', groupSchema);

module.exports = Groups;