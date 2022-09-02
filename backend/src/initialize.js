const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const { stream } = require('./utils/logger');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('../docs/swagger-definition');

const initialize = (app) => {
  app.use(cookieParser());
  app.use(express.json());
  app.use(morgan('combined', { stream }));

  if (process.env.NODE_ENV !== 'production') {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  }
};

module.exports = initialize;
