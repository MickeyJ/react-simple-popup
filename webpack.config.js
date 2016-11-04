const webpack = require('webpack');

module.exports = {
  entry: './src/',
  output: {
    path: './public/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './public/',
    historyApiFallback: {
      index: 'index.html'
    }
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ["react", "es2015", "stage-0"]
        }
      },
      {
        test: /\.scss/,
        exclude: /node_modules/,
        loaders: ["style", "css", "sass"]
      }
    ]
  }
};