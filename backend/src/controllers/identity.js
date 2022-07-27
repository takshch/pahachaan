const profileService = require('../services/profile');
const identityService = require('../services/identity');

const createIdentity = async (req, res) => {
  const { profileId } = req.body;
  const { username: owner } = req;

  try {
    if (profileId) {
      const profile = await profileService.findProfile(profileId);

      if (!profile) {
        return res.status(200).send({ error: 'profile does not exists' });
      }
    }

    const identity = await identityService.createIdentity({ profileId, owner });

    {
      const { _id: id, profileId } = identity;
      res.status(200).send({ id, profileId });
    }
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
};

const getIdentity = async (req, res) => {
  const { identityId } = req.params;

  try {
    let identity = await identityService.findIdentity(identityId);

    if (!identity) {
      return res.status(404).send({ error: 'identity does not exists' });
    }

    const { _id: id, profileId } = identity;
    res.status(200).send({ id, profileId });
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
};

const updateIdentity = async (req, res) => {
  const { identityId } = req.params;
  const { profileId } = req.body;
  const { username } = req;

  try {
    let identity = await identityService.findIdentity(identityId);

    if (!identity) {
      return res.status(404).send({ error: 'identity does not exists' });
    }

    const { owner } = identity;

    if (owner !== username) {
      return res.status(401).send({ error: 'unauthorized' });
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

const deleteIdentity = async (req, res) => {
  const { identityId } = req.params;
  const { username } = req;

  try {
    let identity = await identityService.findIdentity(identityId);

    if (!identity) {
      return res.status(200).send();
    }

    const { owner } = identity;

    if (owner !== username) {
      return res.status(401).send({ error: 'unauthorized' });
    }

    await identityService.deleteIdentity(identityId);
    return res.status(200).send();
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
};

module.exports = { createIdentity, getIdentity, updateIdentity, deleteIdentity };