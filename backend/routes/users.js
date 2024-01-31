const express = require('express');
const { addUsers } = require('../controller/users');
const usersRoute = express.Router()

usersRoute.post('/register', addUsers)


module.exports={usersRoute}