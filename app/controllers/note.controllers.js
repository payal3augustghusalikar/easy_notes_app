
//const Note = require('../models/note.model.js');
const service = require('../services/services')



// // Create and Save a new Note
// exports.create = (req, res) => {
//     // Validate request
//     if (!req.body.content) {
//         return res.status(400).send({
//             message: "Note content can not be empty"
//         });
//     }

//     // Create a Note
//     const note = new Note({
//         title: req.body.title || "Untitled Note", //name is coming from request object i.e. we are passing in body
//         content: req.body.content
//     });

//     // Save Note in the database
//     note.save()
//         .then(data => {
//             res.send(data);
//         }).catch(err => {
//             res.status(500).send({
//                 message: err.message || "Some error occurred while creating the Note."
//             });
//         });
// };


// // Retrieve and return all notes from the database.
// // exports.findAll = (req, res) => {
// //     Note.find()
// //         .then(notes => {
// //             res.send(notes);
// //         }).catch(err => {
// //             res.status(500).send({
// //                 message: err.message || "Some error occurred while retrieving notes."
// //             });
// //         });
// // };


// // Retrieve and return all notes from the database.
// // exports.findAll = (req, res) => {
// //     try {
// //         Note.findAll((error, data) => {
// //             if (error) {
// //                 logger.error(error.message)
// //                 const response = { success: false, message: error.message }
// //                 return res.status(500).send(response)
// //             }

// //             logger.error("Successfully retrieved notes !")
// //             const response = { success: true, message: "Successfully retrieved notes !", data: data }
// //             return res.status(200).send(response)
// //         })
// //     }
// //     catch (error) {
// //         const response = { success: false, message: "Some error occurred !" }
// //         return res.status(500).send(response)
// //     }
// // }



// // exports.findAll = (request, response) => {
// exports.findAll = (request, response) => {
//     try {
//         service.findAll((error, data) => {
//             //  response.status(200).send(data);
//             response.send(data)
//         });
//     } catch (error) {
//         response.status(500).send(error.message);
//     }
// }

// // exports.findOne = (req, res) => {
// //     try {
// //         const _id = req.params.noteId;
// //         //Note.findById(req.params.noteId => {
// //         service.findById((_id) => {
// //             // note => {
// //             //     if (!note) {
// //             //         return res.status(404).send({
// //             //             message: "Note not found with id " + req.params.noteId
// //             //         });
// //             //     }
// //             response.send(note);
// //         });

// //     } catch (error) {
// //         return res.status(500).send({
// //             message: "Error retrieving note with id " + req.params.noteId

// //         }
// //     }

//     // Find a single note with a noteId and id is getting in url so params
//     // exports.findOne = (req, res) => {
//     //     Note.findById(req.params.noteId)
//     //         .then(note => {
//     //             if (!note) {
//     //                 return res.status(404).send({
//     //                     message: "Note not found with id " + req.params.noteId
//     //                 });
//     //             }
//     //             res.send(note);
//     //         }).catch(err => {
//     //             if (err.kind === 'ObjectId') {
//     //                 return res.status(404).send({
//     //                     message: "Note not found with id " + req.params.noteId
//     //                 });
//     //             }
//     //             return res.status(500).send({
//     //                 message: "Error retrieving note with id " + req.params.noteId
//     //             });
//     //         });
//     // };

//     // Update a note identified by the noteId in the request
//     exports.update = (req, res) => {
//         // Validate Request
//         if (!req.body.content) {
//             return res.status(400).send({
//                 message: "Note content can not be empty"
//             });
//         }

//         // Find note and update it with the request body
//         Note.findByIdAndUpdate(req.params.noteId, {
//             title: req.body.title || "Untitled Note",
//             content: req.body.content
//         }, { new: true })
//             .then(note => {
//                 if (!note) {
//                     return res.status(404).send({
//                         message: "Note not found with id " + req.params.noteId
//                     });
//                 }
//                 res.send(note);
//             }).catch(err => {
//                 if (err.kind === 'ObjectId') {
//                     return res.status(404).send({
//                         message: "Note not found with id " + req.params.noteId
//                     });
//                 }
//                 return res.status(500).send({
//                     message: "Error updating note with id " + req.params.noteId
//                 });
//             });
//     };

//     // Delete a note with the specified noteId in the request
//     exports.delete = (req, res) => {
//         Note.findByIdAndRemove(req.params.noteId)
//             .then(note => {
//                 if (!note) {
//                     return res.status(404).send({
//                         message: "Note not found with id " + req.params.noteId
//                     });
//                 }
//                 res.send({ message: "Note deleted successfully!" });
//             }).catch(err => {
//                 if (err.kind === 'ObjectId' || err.name === 'NotFound') {
//                     return res.status(404).send({
//                         message: "Note not found with id " + req.params.noteId
//                     });
//                 }
//                 return res.status(500).send({
//                     message: "Could not delete note with id " + req.params.noteId
//                 });
//             });
//     };






















const Note = require('../models/note.model.js');

// // Create and Save a new Note
// exports.create = (req, res) => {
//     // Validate request
//     if (!req.body.content) {
//         return res.status(400).send({
//             message: "Note content can not be empty"
//         });
//     }

//     // Create a Note
//     const note = new Note({
//         title: req.body.title || "Untitled Note", //name is coming from request object i.e. we are passing in body
//         content: req.body.content
//     });

//     // Save Note in the database
//     note.save()
//         .then(data => {
//             res.send(data);
//         }).catch(err => {
//             res.status(500).send({
//                 message: err.message || "Some error occurred while creating the Note."
//             });
//         });
// };


/**
 * @description Create and Save message
 */
exports.create = (req, res) => {
  //  const content = req.body.content
  const note = new Note({
    title: req.body.title || "Untitled Note", //name is coming from request object i.e. we are passing in body
    content: req.body.content
});

    service.saveData(note, (err, result) => {
        if (err) {
            res.status(400).send({
                message: `content can not be empty`
            });
        } else {
            res.status(200).send(result)
        }
    })

};



// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    Note.find()
        .then(notes => {
            res.send(notes);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
};

// exports.findAll = (request, response) => {
//     try {
//         service.findAll((error, data) => {
//             //  response.status(200).send(data);
//             response.send(data)
//         });
//     } catch (error) {
//         response.status(500).send(error.message);
//     }
// }




// Find a single note with a noteId
// exports.findOne = (req, res) => {
//     Note.findById(req.params.noteId) // id is getting in url so params
//         .then(note => {
//             if (!note) {
//                 return res.status(404).send({
//                     message: "Note not found with id " + req.params.noteId
//                 });
//             }
//             res.send(note);
//         }).catch(err => {
//             if (err.kind === 'ObjectId') {
//                 return res.status(404).send({
//                     message: "Note not found with id " + req.params.noteId
//                 });
//             }
//             return res.status(500).send({
//                 message: "Error retrieving note with id " + req.params.noteId
//             });
//         });
// };




// exports.findOne = (req, res) => {
//     try {
//      id = req.params.noteId;
//     //Note.findById(req.params.noteId => {
//     service.findOne(noteData => {
//         (note => {
//             if (!note) {
//                 return res.status(404).send({
//                     message: "Note not found with id " + req.params.noteId
//                 });
              
//             };
           
//         });
//         response.send(note);
//     });

//  } catch (error) {
//         //  return res.status(500).send({
//         //      message: "Error retrieving note with id " + req.params.noteId

//          }

// }


exports.findOne = (req, res) => {
        try {
const noteData = {
    noteID : req.params.noteId
}
         
        //Note.findById(req.params.noteId => {
        service.findOne(noteID, (data,error) => {

                if (!data) {
                    return res.status(404).send({
                        message: "Note not found with id " + req.params.noteId
                    });
                  
                };
               
            });
            response.send(noteData.noteID);
     
    
     } catch (error) {
            //  return res.status(500).send({
            //      message: "Error retrieving note with id " + req.params.noteId
    
             }
    
    }







// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // Find note and update it with the request body
    Note.findByIdAndUpdate(req.params.noteId, {
        title: req.body.title || "Untitled Note",
        content: req.body.content
    }, { new: true })
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.noteId
                });
            }
            res.send(note);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.noteId
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params.noteId
            });
        });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Note.findByIdAndRemove(req.params.noteId)
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.noteId
                });
            }
            res.send({ message: "Note deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.noteId
                });
            }
            return res.status(500).send({
                message: "Could not delete note with id " + req.params.noteId
            });
        });
};

