const Identity = require('../models/identity');

const createIdentity = async (profileId) => {
  let identity;

  if (profileId) {
    identity = await Identity.create({ profileId });
  } else {
    identity = await Identity.create({});
  }

  return identity;
};

const updateIdentity = async (identityId, profileId = '') => {
  const identity = await Identity.findByIdAndUpdate(identityId, { $set: { profileId } }, { new: true });
  return identity;
};

const findIdentity = async (identityId) => {
  const identity = await Identity.findById(identityId);
  return identity;
};

module.exports = { findIdentity, createIdentity, updateIdentity };