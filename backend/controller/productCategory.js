const { ProductCategory } = require('../models')

class ProductCategoryController {
    // Get all categories
    async getAllCategories(req, res) {
        try {
            console.log("coba");
            const categories = await ProductCategory.findAll({
                order: [['categoryName', 'ASC']],
            });
            res.json(categories);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Failed to retrieve categories' });
        }
    }
    // Get a single category by ID
    async getCategoryById(req, res) {
        const { id } = req.params;
        try {
            const category = await ProductCategory.findByPk(id);
            res.json(category);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Failed to retrieve category' });
        }
    }
    // Create a new category
    async createCategory(req, res) {
        const { name } = req.body;
        try {
            const newCategory = await ProductCategory.create({ categoryName: name });
            res.status(201).json(newCategory);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Failed to create category' });
        }
    }
    // Update a category
    async updateCategory(req, res) {
        const { id } = req.params;
        const { name } = req.body;
        try {
            const category = await ProductCategory.findByPk(id);
            if (!category) {
                return res.status(404).json({ message: 'Category not found' });
            }
            category.categoryName = name;
            await category.save();
            res.json(category);
        } catch (error) {
            console.log(error);
        }
    }
    // Delete a category
    async deleteCategory(req, res) {
        const { id } = req.params;
        try {
            const category = await ProductCategory.findByPk(id);
            if (!category) {
                return res.status(404).json({ message: 'Category not found' });
            }
            await category.destroy();
            res.json({ message: 'Category deleted successfully' });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Failed to delete category' });
        }
    }
}

module.exports = new ProductCategoryController();