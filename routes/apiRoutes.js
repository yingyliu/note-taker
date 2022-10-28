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

module.exports = router;