const categorycontroller = require('../controllers/category.controller');
const router = require('express').Router();

router.get('/', categorycontroller.getCategories);
router.get('/:id', categorycontroller.getCategory);
router.post('/', categorycontroller.createCategory);
router.patch('/:id', categorycontroller.updateCategory);
router.delete('/:id', categorycontroller.deleteCategory);

module.exports = router;
