const cartcontroller = require('../controllers/cart.controller');
const router = require('express').Router();
const jwtmiddleware = require('../middlewares/auth.middleware');
router.get('/', jwtmiddleware.verifyToken, cartcontroller.getCart);
router.post('/',jwtmiddleware.verifyToken, cartcontroller.createCart);
router.delete('/',jwtmiddleware.verifyToken, cartcontroller.deleteCart);
router.post('/items',jwtmiddleware.verifyToken, cartcontroller.createCartItem);
router.patch('/items/:productId',jwtmiddleware.verifyToken, cartcontroller.updateCartItem);
router.delete('/items/:productId',jwtmiddleware.verifyToken, cartcontroller.deleteCartItem);

module.exports = router;
