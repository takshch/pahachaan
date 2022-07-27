const express = require('express');
const { validateAuth } = require('../validators/auth');
const {
  validateCreateProfile,
  validateGetProfile,
  validateUpdateProfile,
  validateDeleteProfile
} = require('../validators/profile');
const {
  getProfiles,
  createProfile,
  getProfile,
  updateProfile,
  deleteProfile,
} = require('../controllers/profile');

const router = express.Router();

router.get('/', validateAuth, getProfiles);
router.post('/', validateAuth, validateCreateProfile, createProfile);
router.patch('/:id', validateAuth, validateUpdateProfile, updateProfile);
router.delete('/:id', validateAuth, validateDeleteProfile, deleteProfile);

router.get('/:id', validateGetProfile, getProfile);

module.exports = router;