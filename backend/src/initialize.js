const morgan = require('morgan');
const { stream } = require('./utils/logger');

const initialize = (app) => {
  app.use(morgan('combined', { stream }));
};

module.exports = initialize;
