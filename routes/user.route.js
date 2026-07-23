const usercontroller = require('../controllers/user.controller');
const router = require('express').Router();

router.get('/', usercontroller.getUser);
router.patch('/', usercontroller.updateUser);
router.delete('/:id', usercontroller.deleteUser);
module.exports = router;
