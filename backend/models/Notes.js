const mongoose = require('mongoose')
const {
    Schema
} = mongoose;

const notesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        default: "General"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const Notes = mongoose.model('notes', notesSchema)

Notes.createIndexes()
module.exports = Notes