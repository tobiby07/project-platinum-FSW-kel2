const express = require('express');
const orderItemController = require('../controller/orderItem');
const orderItemRoute = express.Router()

orderItemRoute.get('/', orderItemController.getAllOrderItems)
orderItemRoute.get('/:id', orderItemController.getOrderItemById)
orderItemRoute.post('/', orderItemController.createOrderItem)
orderItemRoute.patch('/:id', orderItemController.updateOrderItem)
orderItemRoute.delete('/:id', orderItemController.deleteOrderItem)

module.exports = { orderItemRoute }