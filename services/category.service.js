const db = require('../models');

module.exports = {

    async getCategories() {
        return await db.Category.findAll();
    },
    async getCategory(id) {
        const category = await db.Category.findByPk(id);
        if (!category) {
            throw new Error('Category not found');
        }
        return category;
    },
    async createCategory(data) {
        const exists = await db.Category.findOne({
            where: { name: data.name }
        });
        if (exists) {
            throw new Error('Category already exists');
        }
        return await db.Category.create({
            name: data.name
        });
    },
    async updateCategory(id, data) {
        const category = await db.Category.findByPk(id);
        if (!category) {
            throw new Error('Category not found');
        }
        const exists = await db.Category.findOne({
            where: { name: data.name }
        });
        if (exists) {
            throw new Error('Category already exists');
        }
        return await category.update({
            name: data.name
        });
    },
    async deleteCategory(id) {
        const products = await db.Product.findAll({
            where: { categoryId: id }
        });
        if (products.length > 0) {
            throw new Error('Category has products');
        }
        const category = await db.Category.findByPk(id);
        if (!category) {
            throw new Error('Category not found');
        }
        return await category.destroy();
    }
};
