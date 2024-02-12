const express = require('express');
const ProductCategoryController = require('../controller/productCategory');
const categoryRoute = express.Router()

categoryRoute.get('/', ProductCategoryController.getAllCategories)
categoryRoute.get('/:id', ProductCategoryController.getCategoryById)
categoryRoute.post('/', ProductCategoryController.createCategory)
categoryRoute.patch('/:id', ProductCategoryController.updateCategory)
categoryRoute.delete('/:id', ProductCategoryController.deleteCategory)

module.exports = { categoryRoute }