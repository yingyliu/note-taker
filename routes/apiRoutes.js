// to require fs, express router and db for notes
const fs = require('fs');
const router = require('express').Router();
const notes = require('../db/db.json');
// need uuid to generate new ids for each note
const uuid = require('uuid');

// GET route
router.get('/notes', (req, res) => {
    res.json(notes);
});

// POST route
router.post('/notes', (req, res) => {
    /* update the json file with the new note  */
    console.log('---------------------------------------------')
    // get the new note from the client
    const addNote = {...req.body};
    console.log(addNote)
    // add an id prop to the new note using uuid
    addNote.id = uuid.v4();

    // get the current notes file (array of note objects)
    console.log(notes);
    // push our new note into notes
    notes.push(addNote);
    console.log(notes);

    // add that new information into our json file
    fs.writeFile('./db/db.json', JSON.stringify(notes), function(err) {
        if (err) {
            res.status(500).json('something went wrong: ' +  err)
        } else {
            console.log('finished writing to file')
            res.json(notes);
        }
    });
});

module.exports = router;