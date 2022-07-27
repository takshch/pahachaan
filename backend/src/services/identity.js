const Identity = require('../models/identity');

const createIdentity = async ({ owner, profileId }) => {
  let identity;

  if (profileId) {
    identity = await Identity.create({ owner, profileId });
  } else {
    identity = await Identity.create({ owner });
  }

  return identity;
};

const findIdentity = async (identityId) => {
  const identity = await Identity.findById(identityId);
  return identity;
};

const updateIdentity = async (identityId, profileId = '') => {
  const identity = await Identity.findByIdAndUpdate(identityId, { $set: { profileId } }, { new: true });
  return identity;
};

const deleteIdentity = async (identityId) => {
  await Identity.findByIdAndDelete(identityId);
};

module.exports = { findIdentity, createIdentity, updateIdentity, deleteIdentity };