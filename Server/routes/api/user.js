const express = require("express");
const user = express.Router();
const controller = require("../../controller/index").user;

//crud
user.get("/:_id", controller.get);
user.post("/", controller.post);

module.exports = user;
