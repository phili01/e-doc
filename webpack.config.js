var path = require('path');

module.exports = {
  mode: 'development',
  entry: {
      App: "./app/assets/scripts/App.js",
      SiteDoc: "./app/assets/scripts/SiteDoc.js"
  },
  output: {
    path: path.resolve(__dirname, './app/temp/scripts'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};
