const express = require('express');
const { validateAuth } = require('../validators/auth');
const {
  validateCreateProfile,
  validateGetProfile,
  validateDeleteProfile
} = require('../validators/profile');
const {
  createProfile,
  getProfile,
  deleteProfile
} = require('../controllers/profile');

const router = express.Router();

router.post('/', validateAuth, validateCreateProfile, createProfile);
router.delete('/:id', validateAuth, validateDeleteProfile, deleteProfile);

router.get('/:id', validateGetProfile, getProfile);

module.exports = router;