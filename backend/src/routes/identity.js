const express = require('express');
const { validateAuth } = require('../validators/auth');
const { validateCreateIdentity, validateUpdateIdentity, validateGetIdentity } = require('../validators/identity');
const { createIdentity, updateIdentity, getIdentity } = require('../controllers/identity');

const router = express.Router();

router.post('/', validateAuth, validateCreateIdentity, createIdentity);
router.patch('/:identityId', validateAuth, validateUpdateIdentity, updateIdentity);

router.get('/:identityId', validateGetIdentity, getIdentity);

module.exports = router;