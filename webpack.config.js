/* eslint-disable */

var webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: 'public/',
    filename: 'bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'src/components/main.js',
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  devtool: 'inline-source-map'
};
