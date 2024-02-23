const express = require('express');
const UserController = require('../controller/users');
const usersRoute = express.Router()

usersRoute.get('/', UserController.getAllUsers)
usersRoute.get('/customers', UserController.getCustomers)
usersRoute.get('/admin', UserController.getAdmin)
usersRoute.get('/:id', UserController.getUserById)
usersRoute.post('/', UserController.createUser)
usersRoute.patch('/:id', UserController.updateUser)
usersRoute.delete('/:id', UserController.deleteUser)

module.exports = { usersRoute }