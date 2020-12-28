const mongoose = require('mongoose');

// document structure and required and optional in data
const NoteSchema = mongoose.Schema({
    title: String,
    content: String
}, {
    timestamps: true
});


module.exports = mongoose.model('Note', NoteSchema);