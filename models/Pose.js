const mongoose = require('mongoose');

const PoseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    difficulty: String,
    Benefits: [String],
    Description: String
}, {timestamps: true});

module.exports = mongoose.model('Pose', PoseSchema);