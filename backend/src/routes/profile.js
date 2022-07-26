const express = require('express');
const { validateAuth } = require('../validators/auth');
const { validateCreateProfile } = require('../validators/profile');
const { createProfile } = require('../controllers/profile');

const router = express.Router();

router.post('/', validateAuth, validateCreateProfile, createProfile);

module.exports = router;