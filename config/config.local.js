const path = require('path');
const {ip} = require('../build/util');

module.exports = appInfo => {
  const config = {};
  const bsPort = 4000;

  config.browsersync = {
    configPath: path.resolve(__dirname, '../build/bs.config'),
    options:{
      port: bsPort,
      publicPath: `http://${ip}:${bsPort}/`
    }
  };

  return config;
};
