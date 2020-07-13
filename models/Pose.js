const mongoose = require('mongoose');

const PoseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    benefits: [String],
    description: String,
    img: 
}, {timestamps: true});

const Pose = mongoose.model('Pose', PoseSchema);

const poseDatabase = [
    {
        name: "Bow Pose",
        benefits: ["strengthens back muscles", "improves posture", "stimulates the organs of the abdomen and neck"],
        description: "bend back into the shape of a bow to feel energetically locked, loaded, and ready to take aim",
        img: "../public/images/bowPose.png"
    },
    {   
        name: "Cat Pose",
        benefits: ["stretches the back, torso and neck"],
        description: "provides a gentle massage to the spine and belly organs",
        img: "../public/images/catPose.png"
    },
    {
        name: "Cow Pose",
        benefits: "stretches the front torso and neck",
        description: "an easy gentle way to warm up the spine",
        img: "../public/images/cowPose.png"
    },
    {
        name: "Bridge Pose",
        benefits: ["improves digestion", "alleviates stress", "stretches the chest, neck and spine"],
        description: "can be whatever you need - energizing, rejuvenating, or restorative",
        img: "../public/images/bridgePose.png"
    },
    {
        
    }
]
module.exports = {
    Pose, 
    poseDatabase
}