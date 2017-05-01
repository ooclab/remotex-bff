const path = require('path');

module.exports = appInfo => {
  const config = {};
  const bsPort = 4000;

  config.browsersync = {
    configPath: path.resolve(__dirname, '../build/bs.config'),
    options:{
      port: bsPort,
      publicPath: `http://localhost:${bsPort}/`
    }
  };

  return config;
};
