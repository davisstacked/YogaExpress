const express = require('express');
const router = express.Router();

//Database
const db = require('../models');



// Poses Index 
// right now this is querying the database we'd create thru the site for poses. but poses collection is already created.
//How to connect database? 
router.get('/', (req, res) => {
    db.Pose.find({}, (err, allPoses) => {
        if (err) return console.log(err);
        console.log(allPoses);
        res.render('poses/index', {
            poses: allPoses,
        });
    });
});


// Poses Show
router.get('/:id', (req, res) => {
    db.Pose.findById(req.params.id, (err, foundPose) => {
        if (err) return console.log(err);  
            res.render('poses/show', {
            pose: foundPose,
                });
        });
    });




// Poses Edit
    router.get('/:id/edit', (req, res) => { 
        db.Sequence.find({}, (err, allSequences) => {
            db.Sequence.findOne({'poses': req.params.id})
            .populate({
                path: 'poses',
                match: {_id: req.params.id}
            })
            .exec((err, foundPoseSequence) => {
                res.render('./poses/edit', {
                    pose: foundPoseSequence.poses[0],
                    sequences: allSequences, 
                    poseSequence: foundPoseSequence
                })
            })
        })
    })




//Poses Update - don't know if we need this for poses
// router.put('/:id/', (req, res) => {
//     db.Pose.findByIdAndUpdate(
//         req.params.id,
//         req.body,
//         {new: true},
//         (err, updatedPose) => {
//         if (err) return console.log(err);
//         db.Sequence.findOne({'poses': req.params.id}, (err, foundSequence) => {
//             if (foundSequence._id.toString() !== req.body.sequenceId){
//                 foundSequence.poses.remove(req.params.id);
//                 foundSequence.save((err, savedSequence) => {
//                     db.Sequence.findById(req.body.sequenceId, (err, newSequence) => {
//                         newSequence.poses.push(updatedPose); 
//                         newSequence.save((err, savedNewSequence) => {
//                             res.redirect(`/poses/${req.params.id}`)
//                         })
//                     })
//                 })
//             } else { 
//                 res.redirect(`/poses/${req.params.id}`);// redirect to poses show route
//             }
//         })
//     })
// })



// Poses Destroy  
router.delete('/:id', (req, res) => {
    db.Pose.findByIdAndDelete(req.params.id, (err, deletedPose) => {
        if (err) return console.log(err);
        console.log(deletedPose);
        db.Sequence.findOne({'poses': req.params.id}, (err, foundSequence) => {
            foundSequence.poses.remove(req.params.id);
            foundSequence.save((err, updatedSequence) => {
                console.log(updatedSequence);
                res.redirect('/sequences') // i have this redirecting to sequences instead of poses. because you can only delete poses from sequences not from the site"
            })
        })
    })
})










module.exports = router;