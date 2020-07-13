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
        // 10th pose
        name: "Locust Pose",
        benefits: ["improves posture", "helps relieve stress", "stretches the shoulders, chest, belly and thighs"],
        description: "preps beginners for deeper backbends, strengthening the back of the torso, legs and arms",
        img: "../public/images/locustPose.png"          
    },
    {
        // 11th pose
        name: "Reclining Hand-to-Big-Toe Pose",
        benefits:["impoves digestion", "strengthens the knees", "stretches hips, thighs, hamstrings, groins and calves"],
        description: "the aching back, tight hamstring cure",
        img: "../public/images/recliningHandToBigToePose.png"
    },
    {
        // 12th pose
        name: "Plow Pose",
        benefits:["reduces stess and fatigue", "stimulates the abdominal organs and the thyroid gland"],
        description: "reduces backache and helps you get to sleep",
        img: "../public/images/plowPose.png"
    },
    { 
        // 13th pose
        name: "Revolved Side Angle Pose",
        benefits:["improves balance", "increases stamina", "improves digestion and aids elimination"],
        description: "requires a lot of flexibility to twist so deeply and ground the back heel",
        img: "../public/images/revolvedSideAnglePose.png"

    },
    {
        // 14th pose
        name: "Half Lord of the Fishes Pose",
        benefits:["energizes the spine", "stimulates the liver and kidneys", "stretches the shoulders, hips, and neck"],
        description: "energizes the spine and stimulates the digestive fire",
        img: "../public/images/halfLordOfTheFishesPose.png"
    },
    {
        // 15th pose
        name: "Extended Triangle Pose",
        benefits: ["improves digestion", "helps relieve stress", "stimulates the abdominal organs"],
        description: "the quintessential standing pose in many styles of yoga",
        img: "../public/images/extendedTrianglePose.png"
    },
    {
        // 16th pose
        name: "Fish Pose",
        benefits: ["improves posture", "strengthens the muscles of the upper back and back of the neck"],
        description: "a traditional text calls fish pose the 'destroyer of all diseases",
        img: "../public/images/fishPose.png"
    },
    {
        // 17th pose
        name: "Half Moon Pose",
        benefits: ["improves digestion", "helps relieve stress", "improves coordination and sense of balance"],
        description: "create leg and ankle strength as you seek stability and extend into this balancing pose",
        img: "../public/images/halfMoonPose.png"
    },
    {
        // 18th pose
        name: "Marichi's Pose",
        benefits: ["stimulates the brain", "stretches the shoulders", "relieves mild backache and hip pain"],
        description: "sometimes called the 'Sage's Pose', Marichi's Pose is a wise addition to any practice",
        img: "../public/images/marichisPose.png"
    },
    {
        // 19th pose
        name: "Revolved Head-to-Knee Pose",
        benefits: [""],
        description: "this twisting variation, takes the classic forward bend to the next level of release",
        img: "../public/images/revolvedHeadToKneePose.png"
    }

]



module.exports = {
    Pose, 
    poseDatabase
}