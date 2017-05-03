const path = require('path');

module.exports = {
  context: path.resolve(__dirname, '../'),

  entry: {
    // Add the client which connects to our middleware
    home: ['./app/public/home/index.js'],
    about: ['./app/public/about/index.js'],
  },

  externals: {
    jquery: "jQuery"
  }

};