const express = require('express');
const router = express.Router();
const db = require('../models');

// Current Path = '/sequences'

// Sequences Index
router.get('/', (req, res) => {
    // Query the database for all sequences
    db.Sequence.find({}, (err, allSequences) => {
        if (err) return console.log(err);

        //Log all sequences
        console.log('All Sequences = ', allSequences);
        // Render the index template with all sequences
        res.render('sequences/index', {
            sequences: allSequences,
        });
    });
});


// Sequences New
router.get('/new', (req, res) => {
    res.render('sequences/new');
});


// Sequences Show
router.get('/:id', (req, res) => {
    //Query the database for the sequence by ID
    db.Sequence.findById(req.params.id)
    .populate({path: 'poses'})
    .exec((err, foundSequence) => {
        if (err) return console.log(err);
        console.log(foundSequence);
        res.render('sequences/show', {
            sequence: foundSequence,
        });
    });

});


// Sequences Create
router.post('/', (req, res) => {
    // Query the database to create a new record
    // Log the request body
    console.log('Request body = ', req.body);
    db.Sequence.create(req.body, (err, newSequence) => {
        if (err) return console.log(err);

        //Log the new sequence
        console.log('New Sequence = ', newSequence);

        res.redirect('/sequences');
    });
});


// Sequences Edit
router.get('/:id/edit', (req, res) => {
    db.Sequence.findById(req.params.id, (err, foundSequence) => {
        if (err) return console.log(err);

        res.render('sequences/edit', {
            sequence: foundSequence,
        });
    });
});


// Sequence Update
router.put('/:id', (req, res) => {
    // Log the data from the client
    console.log('Updated Sequence =', req.body);
    db.Sequence.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true},
        (err, updatedSequence) => {
            if (err) return console.log(err);
            res.redirect('/sequences')
        }
    )
})


// Sequence Destroy
router.delete('/:id', (req, res) => {
    console.log('Deleting Sequence ID = ', req.params.id);
  
    db.Sequence.findByIdAndDelete(req.params.id, (err, deletedSequence) => {
      if (err) return console.log(err);
      console.log('The deleted Sequence = ', deletedSequence);
        { $pull: {deletedSequence.poses; { $in: deletedSequence.poses}}}
        res.redirect('/Sequences');
      })
    });
  


  module.exports = router;