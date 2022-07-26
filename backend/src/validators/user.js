const Joi = require('joi');

const options = {
  errors: {
    wrap: { label: '' }
  }
};

const validateRegister = async (req, res, next) => {
  const schema = Joi.object().keys({
    username: Joi.string().required(),
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    password: Joi.string().required().min(6),
  });

  try {
    await schema.validateAsync(req.body, options);
    next();
  } catch (e) {
    const { details } = e;
    const { message } = details[0];
    res.status(400).send({ error: message });
  }
};

const validateLogin = async (req, res, next) => {
  const schema = Joi.object().keys({
    username: Joi.string(),
    email: Joi.string().email({ tlds: { allow: false } }),
    password: Joi.string().required().min(6),
  }).xor('username', 'email');

  try {
    await schema.validateAsync(req.body, options);
    next();
  } catch (e) {
    const { details } = e;
    const { message } = details[0];
    res.status(400).send({ error: message });
  }
};

module.exports = { validateLogin, validateRegister };