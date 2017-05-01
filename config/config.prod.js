const path = require("path");

module.exports = appInfo => {
  const config = {};

  config.static = {
    maxAge: 31536000,
    prefix: '/public/',
    dir: path.join(appInfo.baseDir, 'dist')
  };

  return config;
};

