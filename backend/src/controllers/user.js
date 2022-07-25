const userService = require('../services/user');

const ERROR_MESSAGE = {
  'email': 'email already exists',
  'username': 'username already exists'
};

const register = async (req, res) => {
  try {
    await userService.register(req.body);
    return res.status(200).send();
  } catch (e) {
    const { code, keyValue } = e;
    let error;

    if (code === 11000) {
      const { email, username } = keyValue;

      if (email) {
        error = ERROR_MESSAGE.email;
      } else if (username) {
        error = ERROR_MESSAGE.username;
      }

      return res.status(422).send({ error });
    }
  }

  res.status(500);
};

module.exports = { register };