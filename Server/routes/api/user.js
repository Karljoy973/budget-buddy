const express = require('express'); 
const user_api = express.Router();

//crud
user_api.get('/user/:id', (req,res, next));
user_api.put('/user/:id', (req, res, next));