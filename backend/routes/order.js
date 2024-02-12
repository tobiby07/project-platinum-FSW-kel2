const express = require('express');
const OrderController = require('../controller/order');
const orderRoute = express.Router()

orderRoute.get('/', OrderController.getAllOrders)
orderRoute.get('/:id', OrderController.getOrderById)
orderRoute.post('/', OrderController.createOrder)
orderRoute.patch('/:id', OrderController.updateOrder)
orderRoute.delete('/:id', OrderController.deleteOrder)

module.exports = { orderRoute }