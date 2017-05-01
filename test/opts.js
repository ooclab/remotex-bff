
// const browserSync = require("browser-sync").create();
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var webpackConfig = require('../build/webpack.config');
webpackConfig.output.publicPath = 'http://localhost:3000/public/'

console.log(webpackConfig)
// Add the client which connects to our middleware
// You can use full urls like 'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr'
// useful if you run your app from another point like django
const hotSet = 'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr&timeout=2000&overlay=false&reload=true'
// add dev-server entry
Object.keys(webpackConfig.entry).forEach(name => {
  if (!/\./.test(name)) {
    webpackConfig.entry[ name ] = [ hotSet ].concat(webpackConfig.entry[ name ]);
  }
});
// console.log(webpackConfig)
var bundler = webpack(webpackConfig);

const opts =  {
  init: true,
  files: [
    "app/view/**/*",
    // "app/public/**/*"
  ],
  logConnections: false,

  middleware: [
    webpackDevMiddleware(bundler, {
      // IMPORTANT: dev middleware can't access config, so we should
      // provide publicPath by ourselves
      publicPath: webpackConfig.output.publicPath,

      // pretty colored output
      stats: { colors: true },

      headers: {
        'X-information': 'egg-webpack-dev-server',
        'Access-Control-Allow-Origin': '*',
      }

      // for other settings see
      // http://webpack.github.io/docs/webpack-dev-middleware.html
    }),

    // bundler should be the same as above
    webpackHotMiddleware(bundler,{
      log: false,
      path: "/__webpack_hmr",
      heartbeat: 2000
    })
  ]
};
//
// browserSync.init(opts,(err, instance)=>{
//   // console.log(err,instance)
// });

module.exports = opts