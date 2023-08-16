const express = require("express");
const logger = require('../log/winston/index')
var bodyParser = require("body-parser");
const app = express();

// ** midlleware1 section

//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }));
//To parse json data
app.use(bodyParser.json());
//include logger


app.use(logger.info);

// ** end of middleware 1 section

// ** route handler
app.get('/', (req, res)=>{
    res
    .status(400)
    .json({message : "Request", code : 200})
})

// ** end of route handler

// ** middleware 2 section
app.use(logger.error)
// ** end of middleware 2 section

module.exports = app;
;