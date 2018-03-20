const mongoose = require('mongoose');

const NoteSchema = new  mongoose.Schema({
    content: {type:String, required: [true, 'Must enter a note'], minlength: [3, 'Note is too short']},
}, {timestamps: true});

mongoose.model('Note', NoteSchema)