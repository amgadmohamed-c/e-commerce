
const productService = require("../services/product.service");

module.exports = {
    async getProducts(req, res) {
        const products = await productService.getProducts();
        res.status(200).json(products);
    },
    async getProduct(req, res) {
        const product = await productService.getProduct(req.params.id);
        res.status(200).json(product);
    },
    async createProduct(req, res) {
        const { name, description, price, stock, category } = req.body;
        if (!name.trim() || !description.trim() || !price || !stock || !category) {
            res.status(400).json({ message: 'Please provide all the required fields' });
            return;
        }
        const newproduct = await productService.createProduct({ name, description, price, stock, category });
        res.status(201).json(newproduct);
    },
    async updateProduct(req, res) {
        const { id } = req.params;
        const { name, description, price, stock, category } = req.body;
        if (!id) {
            res.status(400).json({ message: 'Please provide all the required fields' });
            return

            }
        const product = await productService.updateProduct(id, { name, description, price, stock, category });
        res.status(200).json(product);
    },
    async deleteProduct(req, res) {
        const { id } = req.params;
        if (!id) {
            res.status(400).json({ message: 'Please provide all the required fields' });
            return;
        }
        const product = await productService.deleteProduct(id);
        res.status(200).json(product);
    }
};
