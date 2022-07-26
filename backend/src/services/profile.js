const Profile = require('../models/profile');

const createProfile = async ({ name, numbers, whatsapps }) => {
  const profile = await Profile.create({ name, numbers, whatsapps });
  return profile;
};

module.exports = { createProfile };