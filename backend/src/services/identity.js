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

module.exports = { createIdentity };