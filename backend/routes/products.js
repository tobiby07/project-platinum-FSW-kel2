const express = require ('express')
const productRoute = express.Router()
const ProductController = require('../controller/product')

productRoute.get('/', ProductController.getAllProducts)
productRoute.post('/', ProductController.createProduct)
productRoute.delete('/:id', ProductController.deleteProduct)
productRoute.patch('/:id', ProductController.editProduct)


module.exports={productRoute}