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

class Model {

    //find all notes 
    // param callback will call service class method
   findAll = (callBack) => {
        Note.find({}, (error, data) => {
            if (error)
                return callBack(error, data)
            else
                console.log(data);
            return callBack(null, data)

        })
    }

    findOne = (noteData, callBack) => {
        Note.findById(noteData._id, (error, data) => {

            if (error)
                return callBack(error, null);
            return callBack(null, data);
        });
    }

}


module.exports = new Model()
module.exports = mongoose.model('Note', NoteSchema);