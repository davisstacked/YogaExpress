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





module.exports = router;