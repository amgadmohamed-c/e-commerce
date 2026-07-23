
const productcontroller = require('../controllers/product.controller');
const router = require('express').Router();

router.get('/', productcontroller.getProducts);
router.get('/:id', productcontroller.getProduct);
router.post('/', productcontroller.createProduct);
router.patch('/:id', productcontroller.updateProduct);
router.delete('/:id', productcontroller.deleteProduct);

module.exports = router;
