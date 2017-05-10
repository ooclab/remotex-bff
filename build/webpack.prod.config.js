const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

const extractCSS = new ExtractTextPlugin('[name]/index.[contenthash].css');
const extractLESS = new ExtractTextPlugin('[name]/index.[contenthash].css');


const prodConfig = {
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/public/',
    filename: '[name]/index.[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, '../app'),
        // exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: extractCSS.extract([{
          loader: 'css-loader',
          options: {
            minimize: true,
          },
        }]),
      },
      {
        test: /\.less$/i,
        use: extractLESS.extract([{
          loader: 'css-loader',
          options: {
            minimize: true,
          },
        }, 'less-loader' ]),
      },
    ],
  },
  node: { Buffer: false },
  devtool: false,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
    extractLESS, // 设置其路径(路径相对于path)
    extractCSS,
    new WebpackAssetsManifest({
      output: 'manifest.json',
      replacer: null,
      space: 2,
      writeToDisk: true,
      fileExtRegex: /\.\w{2,4}\.(?:map|gz)$|\.\w+$/i,
      sortManifest: true,
      merge: false,
      publicPath: '/public/',
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: 2,
      filename: '[name]/index.[chunkhash].js',
    }),
  ],
};

module.exports = merge(baseConfig, prodConfig);
