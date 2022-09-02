const PORT = 4000;
const baseURL = `http://localhost:${PORT}`;

const config = {
  'baseURL': baseURL,
  'port': PORT,
  'logs': {
    'file': false,
    'console': true
  },
  'mongodb': {
    'url': 'mongodb://localhost:27017/pahachaan'
  },
};

module.exports = config;