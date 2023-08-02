const express = require('express'); 
const user = express.Router();
const controller = require('../../controller/index')

//crud
user.get('/user/:id', controller.get);
user.put('/user', controller.put);



module.exports = user;