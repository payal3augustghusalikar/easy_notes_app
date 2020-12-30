const noteModel = require('../models/note.model')

/**
 * @description create new note 
 * @param {*} data 
 * @param {*} callback calls controller method
 */
exports.createNewNote = (data, callback) => {
    noteModel.create(data, (err, data) => {
        if (err) {
            callback(err, null)
        } else {
            return callback(null, data);
        }
    })
}

/**
 * @description find all notes
 * @param {*} callBack calls controller method
 */
exports.findAll = (callBack) => {
    noteModel.findAll((data, error) => {
        if (error)
            return callBack(new Error("Some error occurred while retrieving notes"), null)
        else
            return callBack(data)
    })
}

/**
 * @description find note by _id
 * @param {*} noteID 
 * @param {*} callBack calls controller method
 */
exports.findNote = (noteID, callBack) => {
    noteModel.findNote((noteID), (data, error) => {
        if (error)
            return callBack(error, null);
        else
            return callBack(null, data);
    });
}

/**
 * @description delete note by _id
 * @param {*} noteID 
 * @param {*} callBack 
 */
exports.delete = (noteID, callBack) => {
    noteModel.delete((noteID), (data, error) => {
        if (error)
            return callBack(new Error("Some error occurred while deleting note"))
        else
            return callBack(null, data)
    })
}

/**
 * 
 * @param {*} noteID 
 * @param {*} note 
 * @param {*} callBack 
 */
exports.updateNote = (noteID, note, callBack) => {
    noteModel.updateNote(noteID, note, (data, error) => {
        if (error)
            return callBack(new Error("Some error occurred while updating note"), null)
        else
            return callBack(null, data)
    })
}

