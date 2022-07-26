const { verifyToken, decodeToken } = require('../services/auth');

const validateAuth = (req, res, next) => {
  const { pahachaan: token } = req.cookies;

  if (!token) {
    res.status(401).send({ error: 'unauthorized' });
    return;
  }

  const isValidToken = verifyToken(token);
  if (isValidToken) {
    const { sub: username } = decodeToken(token);
    req.username = username;
    next();
  } else {
    res.status(401).send({ error: 'unauthorized' });
  }
};

module.exports = { validateAuth };