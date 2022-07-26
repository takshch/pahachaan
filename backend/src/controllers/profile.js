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

module.exports = { createProfile };