const mongoose = require('mongoose');

const PoseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    benefits: [String],
    description: String,
    img: String,
}, {timestamps: true});

const Pose = mongoose.model('Pose', PoseSchema);


module.exports = Pose;