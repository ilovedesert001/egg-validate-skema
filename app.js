'use strict';
const skema = require('skema');

module.exports = app => {
  app.skema = {
    lib: skema,
    cache: {},
  };
};
