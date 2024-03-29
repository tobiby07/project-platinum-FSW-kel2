const db = require("../models");
const { ProductCategory, Brands } = require('../models');
const fs = require('fs');
const Product = db.Product;
const multer = require('multer')
const upload = multer({ dest: '../images/' })
class ProductController {
  async getAllProducts(req, res) {
    try {
      const products = await Product.findAll({
        include: [ProductCategory, Brands]
      });

      res.json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getProductById(req, res) {
    const productId = req.params.id;
    try {
      const product = await Product.findByPk(productId, {
        include: [ProductCategory, Brands]
      });

      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      res.status(200).json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to fetch product" });
    }
  }


  async createProduct(req, res) {
    try {
      const imagePath = req.file?.filename || null
      const {
        categoryId,
        brandId,
        productName,
        productDescription,
        price,
        stock,
      } = req.body;

      const newProduct = await Product.create({
        categoryId,
        brandId,
        productName,
        productDescription,
        price,
        stock,
        productImage: imagePath || null,
      });

      res.status(201).json(newProduct);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to create a new product' });
    }
  }

  async deleteProduct(req, res) {
    const productId = req.params.id;
    try {
      if (req.headers.role !== 'admin') {
        return res.status(403).json({ message: 'Permission denied' });
      }

      const deletedProduct = await Product.destroy({
        where: {
          id: productId,
        },
      });

      if (deletedProduct === 1) {
        return res
          .status(200)
          .json({ message: "Product has been deleted successfully" });
      } else {
        return res.status(404).json({ message: "Product not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to delete the product" });
    }
  }

  async editProduct(req, res) {
    const productId = req.params.id;
    const imagePath = req.file?.filename || null
    const { productName, productDescription, price, stock, categoryId, brandId } = req.body;
    try {
      if (req.headers.role !== 'admin') {
        return res.status(403).json({ message: 'Permission denied' });
      }
      // Find produk berdasarkan ID
      const product = await Product.findByPk(productId);

      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      // Update atribut-atribut produk
      product.productName = productName;
      product.productDescription = productDescription;
      product.price = price;
      product.stock = stock;
      product.categoryId = categoryId;
      product.brandId = brandId;
      product.productImage = imagePath || null;
      await product.save();

      return res.status(200).json({ message: "Product updated successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Failed to update product" });
    }
  }
}

module.exports = new ProductController();
