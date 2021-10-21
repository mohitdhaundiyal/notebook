const express = require('express')
const router = express.Router()
const Notes = require('../models/Notes')

const fetchUser = require('../middleware/fetchUser')

// Create note
router.post('/addNote', fetchUser, async (req, res) => {
    const {
        title,
        description,
        tag
    } = req.body
    const note = await Notes.create({
        title,
        description,
        tag,
        user: req.user.id
    })
    res.send(note)
})

// Get notes
router.get('/getNotes', fetchUser, async (req, res) => {
    const notes = await Notes.find({
        user: req.user.id
    }).sort('-timestamp')
    res.json(notes)
})

// Update notes
router.put('/update/:id', fetchUser, async (req, res) => {
    const {
        title,
        description,
        tag
    } = req.body;
    // Create newNote object
    const newNote = {};
    if (title) {
        newNote.title = title
    };
    if (description) {
        newNote.description = description
    };
    if (tag) {
        newNote.tag = tag
    };
    // Find note to be updated
    let note = await Notes.findById(req.params.id);
    if (!note) {
        return res.status(404).send('Not found')
    }
    if (note.user.toString() != req.user.id) {
        return res.status(401).send('Not allowed')
    }
    note = await Notes.findByIdAndUpdate(req.params.id, {
        $set: newNote
    }, {
        new: true
    })
    res.send(note)
})

// Delete note
router.delete('/delete/:id', fetchUser, async (req, res) => {
    // Find note to be deleted and verify if it belong to same user
    let note = await Notes.findById(req.params.id);
    if (!note) {
        return res.status(404).send('Not found')
    }

    if (note.user.toString() != req.user.id) {
        return res.status(401).send('Not allowed')
    }

    note = await Notes.findByIdAndDelete(req.params.id)
    res.json({
        "Success": "Note has been deleted"
    })
})

module.exports = router