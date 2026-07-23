const router = require('express').Router();
const authcontroller = require('../controllers/auth.controller');

router.post('/login', authcontroller.signIn);
router.post('/register', authcontroller.signUp);

router.post('/reauth', authcontroller.reauth);
module.exports = router;
