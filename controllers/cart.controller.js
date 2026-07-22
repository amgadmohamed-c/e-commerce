const cartService = require("../services/cart.service");

module.exports = {
    async getCart(req, res) {
        const cart = await cartService.getCart(req.user.id);
        res.status(200).json(cart);
    },
    async createCart(req, res) {
        const userId = req.user.id;
        if (!userId) {
            res.status(400).json({ message: 'Please provide all the required fields' });
            return;
        }
        const newcart = await cartService.createCart(userId);
        res.status(201).json(newcart);
    },
    async deleteCart(req, res) {
        const userId = req.user.id;
        if (!userId) {
            res.status(400).json({ message: 'Please provide all the required fields' });
            return;
        }
        const cart = await cartService.deleteCart(userId);
        res.status(200).json(cart);
    },
    async createCartItem(req, res) {
        const { productId, quantity } = req.body;
        if (!productId || quantity <= 0 ) {
            res.status(400).json({ message: 'Please provide all the required fields' });
            return;
        }
        const cartitem = await cartService.createCartItem(req.user.id, productId, quantity);
        res.status(201).json(cartitem);
    },
    async updateCartItem(req, res) {
        const { productId, quantity } = req.body;
        if (!productId || quantity <= 0 ) {
            res.status(400).json({ message: 'Please provide all the required fields' });
            return;
        }
        const cartitem = await cartService.updateCartItem(req.user.id, productId, quantity);
        res.status(200).json(cartitem);
    },
    async deleteCartItem(req, res) {
        const productId = req.params.productId;
        if (!productId) {
            res.status(400).json({ message: 'Please provide all the required fields' });
            return;
        }
        const cartitem = await cartService.deleteCartItem(req.user.id, productId);
        res.status(200).json(cartitem);
    }
};
