'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.get('/p/:page', 'home.index');

  app.get('/about', 'home.about');
};
