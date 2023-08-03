const express = require("express");
const user = express.Router();
const {post_user} = require('../../database/')

//crud
//user.get("/:_id", //controller.get);
 user.post("/", post_user);

module.exports = user;
