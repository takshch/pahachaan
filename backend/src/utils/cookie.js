const config = require('config');

const COOKIE_NAME = config.get('cookieName');

if (!COOKIE_NAME) {
  throw new Error('cookieName is not available in config');
}

const COOKIE_OPTIONS = {
  maxAge: new Date(Date.now() + 60 * 60 * 1000),
  httpOnly: true
};

module.exports = { COOKIE_NAME, COOKIE_OPTIONS };
