const db = require("../models");
const { ProductCategory } = require('../models');
const fs = require('fs');
const Product = db.Product;

class ProductController {
  async getAllProducts(req, res) {
    try {     
        const products = await Product.findAll({
            include: ProductCategory
        });

        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

  async createProduct(req, res) {
    try {
      const imagePath = req.file ?  `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}` : null
      const {
        categoryId,
        productName,
        productDescription,
        price,
        stock,
      } = req.body;

      const newProduct = await Product.create({
        categoryId,
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
    const productId = req.params.productId;
    try {
      if (res.locals.user.role !== 'admin') {
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
    const productId = req.params.productId;
    const { productName, productDescription, price, stock, categoryId } = req.body;

    try {
      if (res.locals.user.role !== 'admin') {
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

      await product.save();

      return res.status(200).json({ message: "Product updated successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Failed to update product" });
    }
  }
}

module.exports = new ProductController();
