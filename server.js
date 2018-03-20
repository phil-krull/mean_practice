const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const PORT = 8888;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './public/dist')));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);


app.listen(PORT, ()=>{
    console.log(`Listening on ports ${PORT}!`);
})