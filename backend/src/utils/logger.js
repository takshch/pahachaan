const winston = require('winston');
const config = require('config');

const options = {
  file: {
    level: 'info',
    handleExceptions: true,
    filename: 'logs/app.log',
    json: true,
    maxsize: 5242880,
    maxFiles: 5,
    colorize: false,
    silent: process.env.NODE_ENV === 'test'
  },
  console: {
    level: 'info',
    handleExceptions: true,
    json: false,
    colorize: true,
    silent: process.env.NODE_ENV === 'test'
  }
};

const logs = config.get('logs');

const transports = [];

if (logs.file) {
  transports.push(new winston.transports.File(options.file));
}

if (logs.console) {
  transports.push(new winston.transports.Console(options.console));
}

const logger = winston.createLogger({
  transports,
  exitOnError: false,
});

const stream = {
  write: (message) => {
    logger.info(message);
  }
}

module.exports = { logger, stream };