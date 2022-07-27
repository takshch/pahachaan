const express = require('express');
const { validateAuth } = require('../validators/auth');
const { validateCreateIdentity, validateUpdateIdentity, validateGetIdentity, validateDeleteIdentity } = require('../validators/identity');
const { createIdentity, updateIdentity, getIdentity, deleteIdentity } = require('../controllers/identity');

const router = express.Router();

router.post('/', validateAuth, validateCreateIdentity, createIdentity);
router.patch('/:identityId', validateAuth, validateUpdateIdentity, updateIdentity);
router.delete('/:identityId', validateAuth, validateDeleteIdentity, deleteIdentity);

router.get('/:identityId', validateGetIdentity, getIdentity);

module.exports = router;