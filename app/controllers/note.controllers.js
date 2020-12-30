
const noteModel = require('../models/note.model.js');
const service = require('../services/services')
const Note = require('../models/note.model.js');

/**
 * @description find note by its id
 * @param {*} req takes _id
 * @param {*} res sends responce from server
 */
exports.findOne = (req, res) => {
    try {
        const noteID = req.params.noteId;
        service.findNote(noteID, note => {
            if (!note) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.noteId
                });
            }
            //res.send({ message: `note found` })
            res.send(note);
        })
    }
    catch (error) {
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.noteId

        })
    }
}


/**
 * @description delete note by its _id
 * @param {*} req 
 * @param {*} res 
 */
exports.delete = (req, res) => {
    try {
        const noteID = req.params.noteId
        service.delete(noteID, note => {
            if (!note) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.noteId
                });
            }
            res.send({
                message: "Note deleted successfully!"
            })
        })
    }

    catch (error) {
        if (err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.noteId
        });
    }
}


/**
 * @description Create and Save note
 * @param {*} req 
 * @param {*} res 
 */
exports.create = (req, res) => {
    const note = new Note({
        title: req.body.title || "Untitled Note", 
        content: req.body.content
    });
    service.createNewNote(note, (err, data) => {
        if (err) {
            res.status(400).send({
                message: `content can not be empty`
            });
        } else {
            res.status(200).send(data)
        }
    })
};

/**
 * @description find all notes 
 * @param {*} request 
 * @param {*} response 
 */
exports.findAll = (request, response) => {
    try {
        service.findAll((notes) => {
            response.status(200).send(notes)
        });
    } catch (error) {
        response.status(500).send(error.message);
    }
}

/**
 * @description find and update note by its _id
 * @param {*} req 
 * @param {*} res 
 */
exports.update = (req, res) => {
    try { 
        // Validate Request
        if (!req.body.content) {
            return res.status(400).send({
                message: "Note content can not be empty"
            });
        }
        const noteID = req.params.noteId;
        const note = new Note({
            title: req.body.title || "Untitled Note", 
            content: req.body.content
        });
        service.updateNote(noteID, note, { new: true },
            note => {
                if (!note) {
                    return res.status(404).send({
                        message: "Note not found with id " + req.params.noteId
                    });
                }
                res.send(note);
            })
    } catch (err) {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.noteId
        });
    };

}




