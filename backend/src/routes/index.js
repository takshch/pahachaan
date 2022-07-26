const express = require('express');
const { register, login } = require('../controllers/user');
const { validateLogin, validateRegister } = require('../validators/user');
const { validateAuth } = require('../validators/auth');

const router = express.Router();

router.post('/register', validateRegister, register);
router.post('/login', validateLogin, login);
router.get('/authtest', validateAuth, (req, res) => res.send(req.username));

module.exports = router;
