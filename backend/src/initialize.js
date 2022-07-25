const express = require('express');
const morgan = require('morgan');
const { stream } = require('./utils/logger');

const initialize = (app) => {
  app.use(express.json());
  app.use(morgan('combined', { stream }));
};

module.exports = initialize;
