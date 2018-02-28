const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/js/index',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.[hash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new UglifyJSWebpackPlugin(),
  ]
};
