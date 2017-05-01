'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1493383375868_2038';

  config.view = {
    defaultViewEngine: 'nunjucks',
    defaultExtension: '.nj',
  };

  return config;
};
