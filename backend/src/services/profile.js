const Profile = require('../models/profile');

const createProfile = async ({ name, numbers, whatsapps }) => {
  const profile = await Profile.create({ name, numbers, whatsapps });
  return profile;
};

const findProfile = async (profileId) => {
  const profile = await Profile.findById(profileId);
  return profile;
};

const deleteProfile = async (profileId) => {
  await Profile.deleteOne({ _id: profileId });
}

module.exports = { findProfile, createProfile, deleteProfile };