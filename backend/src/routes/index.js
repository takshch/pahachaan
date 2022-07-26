const express = require('express');
const { register, login } = require('../controllers/user');
const { validateLogin, validateRegister } = require('../validators/user');

const router = express.Router();

router.post('/register', validateRegister, register);
router.post('/login', validateLogin, login);

module.exports = router;
