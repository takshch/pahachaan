const config = require('config');
const http = require('http');
const app = require('./src/app');
const { logger } = require('./src/utils/logger');

const PORT = config.get('port');

if (!PORT) {
  console.log('PORT is not available in config');
}

const server = http.createServer(app);

function onListening() {
  logger.info(`Server started listening on port ${PORT}`);
}

function onError(err) {
  logger.info(err);
}

server.on('listening', onListening);
server.on('error', onError);

server.listen(PORT);
