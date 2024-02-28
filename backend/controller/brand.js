const { Brands } = require("../models");

class BrandController {
  async getAllBrands(req, res) {
    try {
      const Brand = await Brands.findAll({
        order: [["name", "ASC"]],
      });
      res.json(Brand);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getBrandById(req, res) {
    const BrandId = req.params.id;
    try {
      const Brand = await Brands.findByPk(BrandId);

      if (!Brand) {
        return res.status(404).json({ message: "Brand not found" });
      }

      res.status(200).json(Brand);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to fetch Brand" });
    }
  }


  async createBrand(req, res) {
    try {
      const imagePath = req.file?.filename || null
      const {
        name
      } = req.body;

      const newBrand = await Brands.create({
        name,
        BrandImage: imagePath || null,
      });

      res.status(201).json(newBrand);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to create a new Brand' });
    }
  }

  async deleteBrand(req, res) {
    const BrandId = req.params.id;
    try {
      if (req.headers.role !== 'admin') {
        return res.status(403).json({ message: 'Permission denied' });
      }

      const deletedBrand = await Brands.destroy({
        where: {
          id: BrandId,
        },
      });

      if (deletedBrand === 1) {
        return res
          .status(200)
          .json({ message: "Brand has been deleted successfully" });
      } else {
        return res.status(404).json({ message: "Brand not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to delete the Brand" });
    }
  }

  async editBrand(req, res) {
    const BrandId = req.params.id;
    const imagePath = req.file?.filename || null
    const { name } = req.body;
    console.log(name)
    try {
      if (req.headers.role !== 'admin') {
        return res.status(403).json({ message: 'Permission denied' });
      }
      // Find produk berdasarkan ID
      const Brand = await Brands.findByPk(BrandId);
      console.log("BRAAAAAND", Brand);

      if (!Brand) {
        return res.status(404).json({ message: "Brand not found" });
      }

      // Update atribut-atribut produk
      Brand.name = name;
      Brand.logo = `http://localhost:3001/images/brands/` + imagePath || null;
      await Brand.save();

      return res.status(200).json({ message: "Brand updated successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Failed to update Brand" });
    }
  }
}

module.exports = new BrandController();
