const express = require('express');
const { register } = require('../controllers/user');
const { validateRegister } = require('../validators/user');

const router = express.Router();

router.post('/register', validateRegister, register);

module.exports = router;
