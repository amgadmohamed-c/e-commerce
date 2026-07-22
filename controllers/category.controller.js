
const categoryService = require("../services/category.service");

module.exports = {
    async getCategories(req, res) {
        const categories = await categoryService.getCategories();
        res.status(200).json(categories);
    },
    async getCategory(req, res) {
        const category = await categoryService.getCategory(req.params.id);
        res.status(200).json(category);
    },
    async createCategory(req, res) {
        const { name } = req.body;
        if (!name || !name.trim()) {
            res.status(400).json({ message: 'Please provide all the required fields' });
            return;
        }
        const newcategory = await categoryService.createCategory({ name });
        res.status(201).json(newcategory);
    },
    async updateCategory(req, res) {
        const { id } = req.params;
        const { name } = req.body;
        if (!id) {
            res.status(400).json({ message: 'Please provide all the required fields' });
            return

            }
        const category = await categoryService.updateCategory(id, { name });
        res.status(200).json(category);
    },
    async deleteCategory(req, res) {
        const { id } = req.params;
        if (!id) {
            res.status(400).json({ message: 'Please provide all the required fields' });
            return;
        }
        const category = await categoryService.deleteCategory(id);
        res.status(200).json(category);
    }
};
