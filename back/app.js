const express = require('express')
const app = express()
const port = 3000
const notes = require('./routes/notes')
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/notes',notes)
app.listen(port,()=>{
    console.log("app running")
})