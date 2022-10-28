const fs = require('fs');
const router = require('express').Router();
const notes = require('../db/db.json');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    const addNote = req.body;


    fs.writeFile('./db/db.json', JSON.stringify(notes), err => {
        if (err) {
            throw err;
        } else {
            return true;
        }
    });

    res.json(notes);
});

router.delete('/notes/:id', (req, res) => {
    const addNote = JSON.parse(fs.readFile('./db/db.json'));
    const clearNote = addNote.filter((remove) => remove.id !== req.params.id);
    fs.writeFile('./db/db.json', JSON.stringify(clearNote));
    res.json(clearNote);
});


module.exports = router;