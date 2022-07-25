const config = require('config');
const http = require('http');
const app = require('./src/app');

const PORT = config.get('port');

if (!PORT) {
  console.log('PORT is not available in config');
}

const server = http.createServer(app);

function onListening() {
  console.log(`Server started listening on port ${PORT}`);
}

function onError() {
  console.log('error');
}

server.on('listening', onListening);
server.on('error', onError);

server.listen(PORT);
