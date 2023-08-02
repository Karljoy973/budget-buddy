const express = require("express");
const logger = require("../log/index");
const app = express();
app.use(logger);

module.exports = app;
