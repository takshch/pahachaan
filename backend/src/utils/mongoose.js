const mongoose = require('mongoose');
const config = require('config');
const { logger } = require('./logger');

const { url } = config.get('mongodb') || {};

if (!url) {
  logger.error('MongoDB url is not available in config');
}

const connect = async () => {
  try {
    await mongoose.connect(url);
  } catch (e) {
    logger.info(e);
  }
};

module.exports = connect;