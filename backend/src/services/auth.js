const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');

const keyPath = path.resolve(__dirname, '../../keys/jwt.key');
const privateKey = fs.readFileSync(keyPath);

if (!privateKey) {
  throw new Error('privateKey is not available');
}

const algorithm = 'ES256';
const expiresIn = 60 * 60; // 1 hour

const generateToken = (username) => {
  const token = jwt.sign({ sub: username }, privateKey, { expiresIn, algorithm });
  return token;
};

const verifyToken = (token) => {
  try {
    jwt.verify(token, privateKey, { algorithm, algorithms: [algorithm] });
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

const decodeToken = (token) => {
  return jwt.decode(token, privateKey);
};

module.exports = { generateToken, verifyToken, decodeToken };