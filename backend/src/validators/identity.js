const Joi = require('joi');
const { OPTIONS } = require('./~base');

const PROFILE_ID_LENGTH = 32;

const validateCreateIdentity = async (req, res, next) => {
  const schema = Joi.object().keys({
    profileId: Joi.string().length(PROFILE_ID_LENGTH)
  });

  try {
    await schema.validateAsync(req.body, OPTIONS);
    next();
  } catch (e) {
    const { details } = e;
    const { message } = details[0];
    res.status(400).send({ error: message });
  }
};

module.exports = { validateCreateIdentity };