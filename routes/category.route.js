const categorycontroller = require('../controllers/category.controller');
const router = require('express').Router();
const jwtmiddleware = require('../middlewares/auth.middleware');

router.get('/', categorycontroller.getCategories);
router.get('/:id', categorycontroller.getCategory);
router.post('/', jwtmiddleware.verifyToken, categorycontroller.createCategory);
router.patch('/:id', jwtmiddleware.verifyToken, categorycontroller.updateCategory);
router.delete('/:id', jwtmiddleware.verifyToken, categorycontroller.deleteCategory);

module.exports = router;
