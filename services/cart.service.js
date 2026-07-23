const db = require('../models');

module.exports = {
    async getCart(userId) {
        const cart = await db.Cart.findOne({
            where: { userId: userId } ,
            include: [{
                model: db.Cartitem,
                as: 'items'
            }]
        });
        if (!cart) {
            throw new Error('Cart not found');
        }

        return cart;
    },
    async createCart(userId) {
        const exists = await db.Cart.findOne({
            where: { userId: userId }
        });
        if (exists) {
            throw new Error('Cart already exists');
        }
        const cart = await db.Cart.create({
            userId: userId
        });


        return cart;
    },
    async deleteCart(userId) {
        const cart = await db.Cart.findOne({
            where: { userId: userId }
        });
        if (!cart) {
            throw new Error('Cart not found');
        }

        return await cart.destroy();
    },
    async createCartItem(userId, productId, quantity) {
        let cart = await db.Cart.findOne({ where: { userId: userId } });
        if (!cart) {
            cart = await db.Cart.create({ userId: userId });

        }

        const product = await db.Product.findByPk(productId);
        if (!product) {
            throw new Error('Product not found');
        }
        if(quantity <= 0) {
            throw new Error('Quantity cannot be negative or zero');
        }
        if(product.stock < quantity ) {
            throw new Error('Not enough stock');
        }
        const exists = await db.Cartitem.findOne({
            where: { productId: productId, cartId: cart.id }
        });
        if (exists) {
            if(exists.quantity + quantity > product.stock) {
                throw new Error('Not enough stock');
            }
            return await exists.update({
                quantity:exists.quantity + quantity
            });
        }

        const cartItem = await db.Cartitem.create({
            productId: productId,
            quantity: quantity,
            cartId: cart.id
        });

        return cartItem;
    },
    async updateCartItem(userId, productId, quantity) {
        const cart = await db.Cart.findOne({
            where: { userId: userId }
        });
        if (!cart) {
            throw new Error('Cart not found');
        }

        const product = await db.Product.findByPk(productId);
        if (!product) {
            throw new Error('Product not found');
        }

        const cartItem = await db.Cartitem.findOne({
            where: { productId: productId, cartId: cart.id }
        });
        if (!cartItem) {
            throw new Error('Cart item not found');
        }

        const updateData = {};
        if (quantity === undefined) {
            throw new Error('Quantity cannot be undefined');
        }
        if (quantity <= 0) {
            throw new Error('Quantity cannot be negative or zero');
        }

        if (quantity !== undefined )  {
            updateData.quantity = quantity;
        }
        if(product.stock < quantity) {
            throw new Error('Not enough stock');
        }


        return await cartItem.update(updateData);
    },
    async deleteCartItem(userId, productId) {
        const cart = await db.Cart.findOne({
            where: { userId: userId }
        });
        if (!cart) {
            throw new Error('Cart not found');
        }


        const cartItem = await db.Cartitem.findOne({
            where: { productId: productId, cartId: cart.id }
        });
        if (!cartItem) {
            throw new Error('Cart item not found');
        }

        return await cartItem.destroy();
    }
    ,
    async getCartItemInfo(userId, cartitemId) {
        const cart = await db.Cart.findOne({
            where: { userId: userId }
        });
        if (!cart) {
            throw new Error('Cart not found');
        }
        const cartItem = await db.Cartitem.findByPk(cartitemId);
        if (!cartItem) {
            throw new Error('Cart item not found');
        }
        return cartItem;
    }
};
