const Joi = require('joi');
const { OPTIONS } = require('./~base');

const validateCreateProfile = async (req, res, next) => {
  const schema = Joi.object().keys({
    name: Joi.string().required(),
    numbers: Joi.array().items(Joi.string()).min(1).required(),
    whatsapps: Joi.array().items(Joi.string()),
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

const validateGetProfile = async (req, res, next) => {
  const schema = Joi.object().keys({
    id: Joi.string().required(),
  });

  try {
    await schema.validateAsync(req.params, OPTIONS);
    next();
  } catch (e) {
    const { details } = e;
    const { message } = details[0];
    res.status(400).send({ error: message });
  }
};

const validateDeleteProfile = validateGetProfile;

const validateUpdateProfile = async (req, res, next) => {
  const paramsSchema = Joi.object().keys({
    id: Joi.string().required(),
  });

  const bodySchema = Joi.object().keys({
    name: Joi.string(),
    numbers: Joi.array().items(Joi.string()).min(1),
    whatsapps: Joi.array().items(Joi.string()),
  }).or('name', 'numbers', 'whatsapps');

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

module.exports = {
  validateCreateProfile,
  validateGetProfile,
  validateUpdateProfile,
  validateDeleteProfile
};