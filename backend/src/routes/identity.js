const express = require('express');
const { validateAuth } = require('../validators/auth');
const { validateCreateIdentity, validateUpdateIdentity } = require('../validators/identity');
const { createIdentity, updateIdentity } = require('../controllers/identity');

const router = express.Router();

router.post('/', validateAuth, validateCreateIdentity, createIdentity);
router.patch('/:identityId', validateAuth, validateUpdateIdentity, updateIdentity);

module.exports = router;