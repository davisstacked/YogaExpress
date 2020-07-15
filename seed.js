const models = require('./models');

const poseDatabase = [
    {
        name: "Bow Pose",
        benefits: ["strengthens back muscles", "improves posture", "stimulates the organs of the abdomen and neck"],
        description: "bend back into the shape of a bow to feel energetically locked, loaded, and ready to take aim",
        img: "/images/bowPose.png"
    },
    {   
        name: "Cat Pose",
        benefits: ["stretches the back, torso and neck"],
        description: "provides a gentle massage to the spine and belly organs",
        img: "/images/catPose.png"
    },
    {
        name: "Cow Pose",
        benefits: ["stretches the front torso and neck"],
        description: "an easy gentle way to warm up the spine",
        img: "/images/cowPose.png"
    },
    {
        name: "Bridge Pose",
        benefits: ["improves digestion", "alleviates stress", "stretches the chest, neck and spine"],
        description: "can be whatever you need - energizing, rejuvenating, or restorative",
        img: "/images/bridgePose.png"
    },
    {
        name: "Camel Pose",
        benefits: ["strengthens back muscles", "improves posture", "stretches the deep hip flexors"],
        description: "bump up your energy by bending back",
        img: "/images/camelPose.png"
    },
    {
        name: "Dolphin Pose",
        benefits:["improves digestion", "helps relieve stress and mild depression", "relieves back pain"],
        description: "strengthens the core, arms, and legs, while also nicely opening the shoulders",
        img: "/images/dolphinPose.png"
    },
    {
        name: "Downward-Facing Dog",
        benefits: ["energizes the body", "strengthens the arms and legs", "improves digestion"],
        description: "the ultimate all-over, rejuvenating stretch",
        img: "/images/downDogPose.png"
    },
    {
        name: "Extended Side Angle Pose",
        benefits: ["increases stamina", "stimulates abdominal organs", "strengthens legs, knees and ankles"],
        description: "find length in your side body, from your heel to your fingertips",
        img: "/images/extendedSideAnglePose.png"
    },
    {
        name: "Legs-Up-the-Wall-Pose",
        benefits: ["calms the mind", "relieves mild backache", "relieves tired or cramped legs and feet"],
        description: "the 'yogi martini' - may have the power to cure whatever ails you",
        img: "/images/legsUpTheWallPose.png"
    },
    {
        name: "Locust Pose",
        benefits: ["improves posture", "helps relieve stress", "stretches the shoulders, chest, belly and thighs"],
        description: "preps beginners for deeper backbends, strengthening the back of the torso, legs and arms",
        img: "/images/locustPose.png"          
    },
    {
        name: "Reclining Hand-to-Big-Toe Pose",
        benefits:["impoves digestion", "strengthens the knees", "stretches hips, thighs, hamstrings, groins and calves"],
        description: "the aching back, tight hamstring cure",
        img: "/images/recliningHandToBigToePose.png"
    },
    {
        name: "Plow Pose",
        benefits:["reduces stess and fatigue", "stimulates the abdominal organs and the thyroid gland"],
        description: "reduces backache and helps you get to sleep",
        img: "/images/plowPose.png"
    },
    { 
        name: "Revolved Side Angle Pose",
        benefits:["improves balance", "increases stamina", "improves digestion and aids elimination"],
        description: "requires a lot of flexibility to twist so deeply and ground the back heel",
        img: "/images/revolvedSideAnglePose.png"

    },
    {
        name: "Half Lord of the Fishes Pose",
        benefits:["energizes the spine", "stimulates the liver and kidneys", "stretches the shoulders, hips, and neck"],
        description: "energizes the spine and stimulates the digestive fire",
        img: "/images/halfLordOfTheFishesPose.png"
    },
    {
        name: "Extended Triangle Pose",
        benefits: ["improves digestion", "helps relieve stress", "stimulates the abdominal organs"],
        description: "the quintessential standing pose in many styles of yoga",
        img: "/images/extendedTrianglePose.png"
    },
    {
        name: "Fish Pose",
        benefits: ["improves posture", "strengthens the muscles of the upper back and back of the neck"],
        description: "a traditional text calls fish pose the 'destroyer of all diseases",
        img: "/images/fishPose.png"
    },
    {
        name: "Half Moon Pose",
        benefits: ["improves digestion", "helps relieve stress", "improves coordination and sense of balance"],
        description: "create leg and ankle strength as you seek stability and extend into this balancing pose",
        img: "/images/halfMoonPose.png"
    },
    {
        name: "Marichi's Pose",
        benefits: ["stimulates the brain", "stretches the shoulders", "relieves mild backache and hip pain"],
        description: "sometimes called the 'Sage's Pose', Marichi's Pose is a wise addition to any practice",
        img: "/images/marichisPose.png"
    },
    {
        name: "Revolved Head-to-Knee Pose",
        benefits: ["improves digestion", "stretches the spine, shoulders and hamstrings"],
        description: "this twisting variation, takes the classic forward bend to the next level of release",
        img: "/images/revolvedHeadToKneePose.png"
    },
    {
        name: "Revolved Triangle Pose",
        benefits: ["relieves mild back pain", "stretches the hips and spine", "opens the chest to improve breathing"],
        description: "preparation for seated forward bends and twists, this pose is key to a skilled practice",
        img: "/images/revolvedTrianglePose.png"
    }
];

models.Pose.create(poseDatabase, (err, result) => {
    if (err) console.log(err);
    console.log('created objects');
})

