const path = require("path");
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const {ip} = require('../build/util');

// return a function to ge bs config
module.exports = (config) => {
  const {port,publicPath} = config;
  const webpackConfig = require('./webpack.dev.config');
  webpackConfig.output.publicPath = publicPath;

// Add the client which connects to our middleware
// You can use full urls like 'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr'
// useful if you run your app from another point like django
  const hotSet = `webpack-hot-middleware/client?path=http://${ip}:${port}/__webpack_hmr&timeout=2000&overlay=false&reload=true`
// add dev-server entry
  Object.keys(webpackConfig.entry).forEach(name => {
    if (!/\./.test(name)) {
      webpackConfig.entry[name] = [hotSet].concat(webpackConfig.entry[name]);
    }
  });

  const bundler = webpack(webpackConfig);

  return {
    init: true,
    files: [
      "app/view/**/*",
      // "app/public/**/*"
    ],
    logConnections: false,

    port, // bs 启动的端口

    middleware: [
      webpackDevMiddleware(bundler, {
        // IMPORTANT: dev middleware can't access config, so we should
        // provide publicPath by ourselves
        publicPath: webpackConfig.output.publicPath,

        // pretty colored output
        stats: {colors: true},

        headers: {
          'X-information': 'egg-webpack-dev-server',
          'Access-Control-Allow-Origin': '*',
        }

        // for other settings see
        // http://webpack.github.io/docs/webpack-dev-middleware.html
      }),

      // bundler should be the same as above
      webpackHotMiddleware(bundler, {
        log: false,
        path: "/__webpack_hmr",
        heartbeat: 2000
      })
    ]
  };
};