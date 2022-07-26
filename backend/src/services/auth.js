const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');

const keyPath = path.resolve(__dirname, '../../keys/jwt.key');
const privateKey = fs.readFileSync(keyPath);

if (!privateKey) {
  throw new Error('privateKey is not available');
}

const expiresIn = 60 * 60; // 1 hour

const generateToken = (username) => {
  const token = jwt.sign({ sub: username }, privateKey, { expiresIn, algorithm: 'ES256' });
  return token;
};

module.exports = { generateToken };