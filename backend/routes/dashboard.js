const express = require('express');
const { addProduct, deleteProduct } = require('../controller/dashboard');
const dashboardRoute = express.Router()

dashboardRoute.post('/add-product', addProduct)
dashboardRoute.delete('/delete-product/:kodeProduct', deleteProduct)

module.exports={
    dashboardRoute
}