const Profile = require('../models/profile');
const { pickBy } = require('../utils/object');

const createProfile = async ({ name, numbers, whatsapps }) => {
  const profile = await Profile.create({ name, numbers, whatsapps });
  return profile;
};

const findProfile = async (profileId) => {
  const profile = await Profile.findById(profileId);
  return profile;
};

const updateProfile = async (profileId, { name, numbers, whatsapps }) => {
  const data = pickBy({ name, numbers, whatsapps }, (v) => v !== undefined);

  const profile = await Profile.findByIdAndUpdate(profileId, { $set: data }, { new: true });
  return profile;
};

const deleteProfile = async (profileId) => {
  await Profile.deleteOne({ _id: profileId });
};

module.exports = { createProfile, findProfile, updateProfile, deleteProfile };