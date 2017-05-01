'use strict';

// had enabled by egg
exports.static = true;

exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};

// exports['webpack-dev-server'] = {
//   enable: false,
//   package: 'egg-webpack-dev-server',
// };