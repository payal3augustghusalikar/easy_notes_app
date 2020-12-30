const mongoose = require('mongoose');
const service = require('../services/services')

// document structure and required and optional in data
const NoteSchema = mongoose.Schema({
    title: String,
    content: String
}, {
    timestamps: true
});

// creating a nw collection
const Note = mongoose.model('Note', NoteSchema)

exports.create = (note, callback) => {
    // const note = new Note({
    //     title: req.body.title || "Untitled Note", //name is coming from request object i.e. we are passing in body
    //     content: req.body.content
    // });
    note.save({}, (err, data) => {
        if (err) {
            callback(err, null);
        } else {
           return callback(null, data)
        }
    })
}


//find all notes 
// param callback will call service class method
exports.findAll = (callBack) => {
    Note.find({}, (error, data) => {
        if (error)
            return callBack(error, data)
        else
            // console.log(data);
            return callBack(null, data)
    })
}

exports.findOne = (noteData, callBack) => {
    Note.findById(noteData.id, (error, data) => {
        if (error)
            return callBack(error, null);
        return callBack(null, data);
    });
}



//module.exports = new Model()
module.exports = mongoose.model('Note', NoteSchema);