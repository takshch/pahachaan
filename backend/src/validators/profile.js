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

module.exports = { validateCreateProfile };