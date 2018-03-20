const notes = require('./../controllers/notes.js');
const path = require('path');

module.exports = (app) => {
    app.get('/notes', notes.index),
    app.post('/notes', notes.add),
    app.get('/notes/:id', notes.findOne),
    app.all('**', (req, res)=>{res.sendFile(path.resolve('public/dist/index.html'))});
}
