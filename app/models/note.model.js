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


class model {}
/**
 * @description create new note
 * @param {*} note 
 * @param {*} callback calls service method
 */
exports.create = (note, callback) => {
    note.save({}, (err, data) => {
        if (err) {
            callback(err, null);
        } else {
            return callback(null, data)
        }
    })
}

/**
 * @description find all notes
 * @param {*} callBack calls service method
 */
exports.findAll = (callBack) => {
    Note.find((error, data) => {
        if (error)
            return callBack(error, data)
        else
            return callBack(data)
    })
}

/**
 * @description find searched note by its id
 * @param {*} noteID takes from request
 * @param {*} callBack calls service method
 */
exports.findNote = (noteID, callBack) => {
    Note.findById(noteID, (error, data) => {
        if (error)
            return callBack(error, null);
        else
            return callBack(null, data);
    });
}


/**
 * @description delete searched note by its id
 * @param {*} noteID takes from request
 * @param {*} callBack calls service method
 */
exports.delete = (noteID, callBack) => {
    Note.findByIdAndRemove(noteID, (error, data) => {
        if (error)
            return callBack(error, null);
        return callBack(null, data);
    });
}

/** */
exports.updateNote = (noteID,  note, callBack) => {
    Note.findByIdAndUpdate(noteID,  (error, data) => {
        if (error)
            return callBack(error, null);
        return callBack(null, note, data);
    });
}


module.exports = mongoose.model('Note', NoteSchema);