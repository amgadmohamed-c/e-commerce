
const productcontroller = require('../controllers/product.controller');
const router = require('express').Router();
const jwtmiddleware = require('../middlewares/auth.middleware');
router.get('/', productcontroller.getProducts);
router.get('/:id', productcontroller.getProduct);
router.post('/',jwtmiddleware.verifyToken,productcontroller.createProduct);
router.patch('/:id', jwtmiddleware.verifyToken,productcontroller.updateProduct);
router.delete('/:id',jwtmiddleware.verifyToken, productcontroller.deleteProduct);

module.exports = router;
