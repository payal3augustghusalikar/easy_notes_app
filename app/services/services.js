const noteModel = require('../models/note.model')
//const util = require('../utility/util')

// //Note.find(callback) {
//   const findAll = (callBack) => {
//         noteModel.findAll((error, data) => {
//             if (error)
//                 return callBack(new Error("Some error occurred while retrieving notes"), null)
//             return callBack(null, data)
//         })
//     }


class NoteService {
    
    createNote = (noteData, callBack) => {
        noteModel.create(noteData, (error, data) => {
            if (error)
                return callBack(new Error("Some error occurred while adding note"), null)
            else
                return callBack(null, data)
        })
    }

    /**
     *@description Retrieve notes
     *@param callback calls controller class method
     */

    // findAll = (callBack) => {
    //    // if (noteModel.findAll) {
    //         Note.find((error, data) => {
    //             if (error)
    //                 return callBack(new Error("Some error occurred while retrieving notes"), null)
    //             else
    //                 return callBack(null, data)
    //         })
    //     }
    // }


    findAll = (callBack) => {
        // if (noteModel.findAll) {
        noteModel.findAll((error, data) => {
            if (error)
                return callBack(new Error("Some error occurred while retrieving notes"), null)
            else
                return callBack(null, data)
        })
    }


    // findOne = (noteData, callBack) => {
    //     noteModel.findOne(noteData, (error, data) => {
    //         if (error)
    //             return callBack(error, null);
    //         return callBack(null, data);
    //     });
    // }


    /**
     *@description Update notes 
     */
    updateNote = (Data, callBack) => {
        noteModel.update(Data, (error, data) => {
            if (error)
                return callBack(new Error("Some error occurred while updating note"), null)
            else
                return callBack(null, data)
        })
    }

    /**
     *@description Delete note
     */
    deleteNote = (Data, callBack) => {
        noteModel.delete(Data, (error, data) => {
            if (error)
                return callBack(new Error("Some error occurred while deleting note"))
            else
                return callBack(null, data)
        })
    }
}

// delete = (greetingData, callBack) => {
//     Greeting.deleteById(greetingData, (error, data) => {
//         if (error)
//             return callBack(error, null);
//         return callBack(null, data);
//     });
// }


// const findAll = (callBack) => {
//     noteModel.findAll((error, data) => {
//         if (error)
//             return callBack(new Error("Some error occurred while retrieving notes"), null)
//         return callBack(null, data)
//     })
// }
//module.exports = { findAll }

module.exports = new NoteService();