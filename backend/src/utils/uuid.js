const { v4: uuidv4 } = require('uuid');

const uuidWithoutDash = () => {
  const uuid = uuidv4();
  return uuid.replace(/-/g, '');
};

module.exports = { uuidWithoutDash };