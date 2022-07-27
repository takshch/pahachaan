const profileService = require('../services/profile');
const identityService = require('../services/identity');

const createIdentity = async (req, res) => {
  const { profileId } = req.body;

  try {
    if (profileId) {
      const profile = await profileService.findProfile(profileId);

      if (!profile) {
        return res.status(200).send({ error: 'profile does not exists' });
      }
    }

    const identity = await identityService.createIdentity(profileId);

    {
      const { _id: id, profileId } = identity;
      res.status(200).send({ id, profileId });
    }
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
};

const updateIdentity = async (req, res) => {
  const { identityId } = req.params;
  const { profileId } = req.body;

  try {
    let identity = await identityService.findIdentity(identityId);

    if (!identity) {
      return res.status(404).send({ error: 'identity does not exists' });
    }

    identity = await identityService.updateIdentity(identityId, profileId);

    {
      const { _id: id, profileId } = identity;
      res.status(200).send({ id, profileId });
    }
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
};

module.exports = { createIdentity, updateIdentity };