const express = require('express');
const { validateAuth } = require('../validators/auth');
const { validateCreateIdentity } = require('../validators/identity');
const { createIdentity } = require('../controllers/identity');

const router = express.Router();

router.post('/', validateAuth, validateCreateIdentity, createIdentity);

module.exports = router;