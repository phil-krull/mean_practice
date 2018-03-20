const mongoose = require('mongoose');
const Note = mongoose.model('Note');
module.exports = {
    index: (req, res)=>{
        console.log('in index method');
        Note.find().sort('-createdAt')
        .then((notes)=>{
            console.log('in index success method');
            res.json(notes);
        })
        .catch((err)=>{
            console.log('in index error method');
            res.send(err);
        })
    },
    add: (req, res)=>{
        console.log(req.body);
        let newNote = new Note(req.body);
        console.log('note before save', newNote);
        newNote.save()
        .then((note)=>{
            console.log('note after save', note);
            res.send(note);
        })
        .catch((err)=>{
            console.log('errors exist: ', err);
            res.send(newNote.errors);
        })
    },
    findOne: (req, res)=>{
        console.log(req.params.id);
        Note.findOne({_id:req.params.id})
        .then((note)=>{
            console.log(note);
            res.send(note);
        })
        .catch((err)=>{
            console.log(err);
            res.send(err);
        })
    }
}