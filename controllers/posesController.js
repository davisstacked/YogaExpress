const express = require('express');
const router = express.Router();

//Database
const db = require('../models');



// Poses Index 
router.get('/', (req, res) => {
      db.Pose.find({}, (err, allPoses) => {
        if (err) return console.log(err);
        db.Sequence.find({}, (err, sequences) => {
            if (err) console.log(err);
            console.log(allPoses);
            res.render('poses/index', {
                poses: allPoses,
                sequences
            });
          })
      
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





// // Poses Edit
//     router.get('/:id/edit', (req, res) => { 
//         db.Sequence.find({}, (err, allSequences) => {
//             db.Sequence.findOne({'poses': req.params.id})
//             .populate({
//                 path: 'poses',
//                 match: {_id: req.params.id}
//             })
//             .exec((err, foundPoseSequence) => {
//                 res.render('./poses/edit', {
//                     pose: foundPoseSequence.poses[0],
//                     sequences: allSequences, 
//                     poseSequence: foundPoseSequence
//                 })
//             })
//         })
//     })




// POSES UPDATE
router.put('/:id/', (req, res) => {
    db.Pose.findById(
        req.params.id,
        // req.body,
        // {new: true},
        (err, foundPose) => {
        if (err) return console.log(err);
        console.log(req.body);
        // {$push: {poses: foundPose}}
        db.Sequence.findById(req.body.sequenceId, (err, foundSequence) => {
       if (err) return console.log(err);
       console.log(foundSequence);
        foundSequence.poses.push(foundPose);
        foundSequence.save((err, savedSequence) => {
            if (err) return console.log(err);
            res.redirect('/poses')

        });
    })
})
})



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