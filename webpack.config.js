'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const API_URL = 'http://localhost:8000';
const CLIENT_PORT = 3000;
const OUTPUT_DIR = 'dist';

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, OUTPUT_DIR),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  devServer: {
    open: true,
    port: CLIENT_PORT,
    proxy: {
      '/api': {
        target: API_URL,
        pathRewrite: { '^/api': '' },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/public/index.html',
    }),
  ],
};
