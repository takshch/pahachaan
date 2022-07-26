const express = require('express');
const { validateAuth } = require('../validators/auth');
const { validateCreateProfile, validateGetProfile } = require('../validators/profile');
const { createProfile, getProfile } = require('../controllers/profile');

const router = express.Router();

router.post('/', validateAuth, validateCreateProfile, createProfile);
router.get('/:id', validateGetProfile, getProfile);

module.exports = router;