const cartcontroller = require('../controllers/cart.controller');
const router = require('express').Router();

router.get('/', cartcontroller.getCart);
router.post('/', cartcontroller.createCart);
router.delete('/', cartcontroller.deleteCart);
router.post('/items', cartcontroller.createCartItem);
router.patch('/items/:productId', cartcontroller.updateCartItem);
router.delete('/items/:productId', cartcontroller.deleteCartItem);

module.exports = router;
