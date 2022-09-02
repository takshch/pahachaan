const PORT = 3000;
const baseURL = `https://localhost:${PORT}`;

const config = {
  'baseURL': baseURL,
  'port': PORT,
  'logs': {
    'file': true,
    'console': true
  }
};

module.exports = config;