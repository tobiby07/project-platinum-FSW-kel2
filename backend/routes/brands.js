const express = require('express');
const brandRoute = express.Router();
const BrandController = require('../controller/brand');
const { brandLogo } = require('../middleware/image-middleware');

brandRoute.get('/', BrandController.getAllBrands);
brandRoute.get('/:id', BrandController.getBrandById);
brandRoute.post('/', brandLogo.single('brandImage'), BrandController.createBrand);
brandRoute.delete('/:id', BrandController.deleteBrand);
brandRoute.patch('/:id', brandLogo.single('brandImage'), BrandController.editBrand);

module.exports = { brandRoute };
