const Profile = require('../models/profile');
const { pickBy } = require('../utils/object');

const createProfile = async ({ owner, name, numbers, whatsapps }) => {
  const profile = await Profile.create({ owner, name, numbers, whatsapps });
  return profile;
};

const findProfiles = async (username) => {
  const profiles = await Profile.find({ owner: username });
  return profiles;
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

module.exports = { findProfiles, createProfile, findProfile, updateProfile, deleteProfile };