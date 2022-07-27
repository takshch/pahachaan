const profileService = require('../services/profile');

const getProfiles = async (req, res) => {
  const { username } = req;

  try {
    const profiles = await profileService.findProfiles(username);
    const data = profiles.map((profile) => {
      const { _id: id, name, numbers, whatsapps } = profile;
      return { id, name, numbers, whatsapps };
    });
    res.status(200).send(data);
  } catch (e) {
    console.log(e);
    return res.status(500).send();
  }
};

const createProfile = async (req, res) => {
  const { username } = req;

  try {
    const data = { owner: username, ...req.body };
    const { _id, name, numbers, whatsapps } = await profileService.createProfile(data);
    return res.status(200).send({ id: _id, name, numbers, whatsapps });
  } catch (e) {
    console.log(e);
    return res.status(422).send();
  }
};

const getProfile = async (req, res) => {
  const { id } = req.params;

  try {
    const profile = await profileService.findProfile(id);

    if (!profile) {
      return res.status(404).send({ error: 'profile does not exists' });
    }

    const { _id, name, numbers, whatsapps } = profile;
    const data = { id: _id, name, numbers, whatsapps };
    return res.status(200).send(data);
  } catch (e) {
    console.log(e);
    return res.status(500).send();
  }
};

const updateProfile = async (req, res) => {
  const { id } = req.params;
  const { username } = req;

  try {
    let profile = await profileService.findProfile(id);

    if (!profile) {
      return res.status(404).send({ error: 'profile does not exists' });
    }

    const { owner } = profile;

    if (owner !== username) {
      return res.status(401).send({ error: 'unauthorized' });
    }

    profile = await profileService.updateProfile(id, req.body);

    const { _id, name, numbers, whatsapps } = profile;
    const data = { id: _id, name, numbers, whatsapps };
    return res.status(200).send(data);
  } catch (e) {
    console.log(e);
    return res.status(422).send();
  }
};

const deleteProfile = async (req, res) => {
  const { id } = req.params;
  const { username } = req;

  try {
    const profile = await profileService.findProfile(id);

    if (!profile) {
      return res.status(200).send();
    }

    const { owner } = profile;
    if (owner !== username) {
      return res.status(401).send({ error: 'unauthorized' });
    }

    await profileService.deleteProfile(id);
    return res.status(200).send();
  } catch (e) {
    console.log(e);
    return res.status(500).send();
  }
};

module.exports = { getProfiles, createProfile, getProfile, updateProfile, deleteProfile };