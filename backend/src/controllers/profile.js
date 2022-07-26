const profileService = require('../services/profile');

const createProfile = async (req, res) => {
  try {
    const { _id } = await profileService.createProfile(req.body);
    return res.status(200).send({ id: _id });
  } catch (e) {
    console.log(e);
    return res.status(422).send();
  }
};

const getProfile = async (req, res) => {
  const { id } = req.params;

  try {
    const profile = await profileService.findProfile(id);

    if (profile) {
      const { _id: id, name, numbers, whatsapps } = profile;
      const data = { id, name, numbers, whatsapps };
      return res.status(200).send(data);
    } else {
      return res.status(200).send({ error: 'profile does not exists' });
    }
  } catch (e) {
    return res.status(500).send();
  }
};

module.exports = { createProfile, getProfile };