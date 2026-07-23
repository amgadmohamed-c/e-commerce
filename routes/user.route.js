const usercontroller = require('../controllers/user.controller');
const router = require('express').Router();
const jwtmiddleware = require('../middlewares/auth.middleware');
router.get('/' , jwtmiddleware.verifyToken, usercontroller.getUser);
router.patch('/', jwtmiddleware.verifyToken, usercontroller.updateUser);
router.delete('/:id', jwtmiddleware.verifyToken, usercontroller.deleteUser);
module.exports = router;
