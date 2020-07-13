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
        benefits: ["stretches the front torso and neck"],
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
        name: "Camel Pose",
        benefits: ["strengthens back muscles", "improves posture", "stretches the deep hip flexors"],
        description: "bump up your energy by bending back",
        img: "../public/images/camelPose.png"
    },
    {
        name: "Dolphin Pose",
        benefits:["improves digestion", "helps relieve stress and mild depression", "relieves back pain"],
        description: "strengthens the core, arms, and legs, while also nicely opening the shoulders",
        img: "../public/images/dolphinPose.png"
    },
    {
        name: "Downward-Facing Dog",
        benefits: ["energizes the body", "strengthens the arms and legs", "improves digestion"],
        description: "the ultimate all-over, rejuvenating stretch",
        img: "../public/images/downDogPose.png"
    },
    {
        name: "Extended Side Angle Pose",
        benefits: ["increases stamina", "stimulates abdominal organs", "strengthens legs, knees and ankles"],
        description: "find length in your side body, from your heel to your fingertips",
        img: "../public/images/extendedSideAnglePose.png"
    },
    {
        name: "Legs-Up-the-Wall-Pose",
        benefits: ["calms the mind", "relieves mild backache", "relieves tired or cramped legs and feet"],
        description: "the 'yogi martini' - may have the power to cure whatever ails you",
        img: "../public/images/legsUpTheWallPose.png"
    },
    {
        name: "Locust Pose",
        benefits: ["improves posture", "helps relieve stress", "stretches the shoulders, chest, belly and thighs"],
        description: "preps beginners for deeper backbends, strengthening the back of the torso, legs and arms",
        img: "../public/images/locustPose.png"          
    },
]



module.exports = {
    Pose, 
    poseDatabase
}