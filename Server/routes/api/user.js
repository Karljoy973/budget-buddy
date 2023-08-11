const express = require("express");
const user = express.Router();
const  {pool}  = require("@db/connection");
// const { post_user } = require("../../database/index");

//crud
/**
 *  *TODO: get user_id 
 *  *TODO: post user_id
 *  *TODO: put user_id
 *  *TODO: delete user_id
 */

user.get("/:id", (req, res) => {
    const id = req.params.id;
    // pool.
});

module.exports = user;
