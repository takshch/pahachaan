const Joi = require('joi');
const { OPTIONS } = require('./~base');

const UUID_LENGTH = 32;

const validateCreateIdentity = async (req, res, next) => {
  const schema = Joi.object().keys({
    profileId: Joi.string().length(UUID_LENGTH)
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

const validateUpdateIdentity = async (req, res, next) => {
  const paramsSchema = Joi.object().keys({
    identityId: Joi.string().length(UUID_LENGTH).required()
  });

  const bodySchema = Joi.object().keys({
    profileId: Joi.string().length(UUID_LENGTH)
  });

  try {
    await paramsSchema.validateAsync(req.params, OPTIONS);
    await bodySchema.validateAsync(req.body, OPTIONS);
    next();
  } catch (e) {
    const { details } = e;
    const { message } = details[0];
    res.status(400).send({ error: message });
  }
};

module.exports = { validateCreateIdentity, validateUpdateIdentity };