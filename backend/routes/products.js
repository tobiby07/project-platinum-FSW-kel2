const express = require('express');
const productRoute = express.Router();
const ProductController = require('../controller/product');
const { image } = require('../middleware/image-middleware');

productRoute.get('/', ProductController.getAllProducts);
productRoute.get('/:id', ProductController.getProductById);
productRoute.post('/', image.single('productImage'), ProductController.createProduct);
productRoute.delete('/:id', ProductController.deleteProduct);
productRoute.patch('/:id', image.single('productImage'), ProductController.editProduct);

module.exports = { productRoute };
