const express = require('express');
const router = require('./routes/index');
const initialize = require('./initialize');
const connect = require('./utils/mongoose');

// initialize
(async () => {
  await connect();
})();

const app = express();
initialize(app);

app.use(router);

module.exports = app;