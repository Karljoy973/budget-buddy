const express = require("express");
const logger = require("@log/index");
const api = require("@api/index");
var bodyParser = require("body-parser");
const app = express();

// ** midlleware1 section
app.use(logger);

//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }));
//To parse json data
app.use(bodyParser.json());

// ** end of middleware 1 section

// ** route handler
app.use("/user", api.user);

// ** end of route handler

// ** middleware 2 section

// ** end of middleware 2 section

module.exports = app;
