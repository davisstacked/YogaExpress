const mongoose = require('mongoose');
const Pose = require('./Pose');

const sequenceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    poses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pose'
    }]
}, {timestamps: true});

const Sequence = mongoose.model('Sequence', sequenceSchema);

module.exports = Sequence;