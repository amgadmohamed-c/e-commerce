const db = require('../models');



module.exports = {

    async getProducts(limit, offset) {
        return await db.Product.findAndCountAll({
            include: [{
                model: db.Category,
                as: 'category'
            }] ,
            limit: limit,
            offset: offset
        });
    },
    async getProduct(id) {
        const product = await db.Product.findByPk(id, {
        include: [{
            model: db.Category,
            as: 'category'
        }]
        });
        if (!product) {
            throw new Error('Product not found');
        }

        return product;
    },
    async createProduct(data) {
        const category = await db.Category.findByPk(data.category);

        if (!category) {
            throw new Error('Category not found');
        }
        if(data.stock < 0) {
            throw new Error('Stock cannot be negative');
        }
        if(data.price < 0) {
            throw new Error('Price cannot be negative');
        }
        return await db.Product.create({
            name: data.name,
            description: data.description,
            price: data.price,
            stock: data.stock,
            categoryId: data.category

        });
    },
    async updateProduct(id, data) {
        let newCategory = null;

        if (data.category) {
            newCategory = await db.Category.findOne({
                where: { name: data.category }
            })
           if (!newCategory) {
                throw new Error('Category not found');
           }
 }

        const product = await db.Product.findByPk(id);

        if (!product) {
            throw new Error('Product not found');
        }

        if (data.stock < 0) {
            throw new Error('Stock cannot be negative');
        }

        if (data.price < 0) {
            throw new Error('Price cannot be negative');
        }

        const updateData = {};

        if (data.name) {
            updateData.name = data.name;
        }

        if (data.description) {
            updateData.description = data.description;
        }

        if (data.price !== undefined) {
            updateData.price = data.price;
        }

        if (data.stock !== undefined) {
            updateData.stock = data.stock;
        }

        if (newCategory) {
            updateData.categoryId = newCategory.id;
        }

        return await product.update(updateData);
    },
    async deleteProduct(id) {
        const product = await db.Product.findByPk(id);
        if (!product) {
            throw new Error('Product not found');
        }

        return await product.destroy();
    }
};
