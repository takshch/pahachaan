const userService = require('../services/user');
const authService = require('../services/auth');
const { COOKIE_NAME, COOKIE_OPTIONS } = require('../utils/cookie');

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


const login = async (req, res) => {
  try {
    const user = await userService.findUser(req.body);

    if (user) {
      const token = authService.generateToken(user.username);
      res.cookie(COOKIE_NAME, token, COOKIE_OPTIONS)
      res.status(200).send();
    } else {
      return res.status(401).send({ error: 'Invalid credentials' });
    }
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


module.exports = { login, register };