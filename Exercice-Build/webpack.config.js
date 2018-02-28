const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env) => {

  const plugins = [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ];

  if (env === 'production') {
    plugins.push(new UglifyJSWebpackPlugin());
  }


  return {
    devtool: (env !== 'production') ? 'source-map' : false,
    entry: './src/js/index',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.[hash].js',
    },
    plugins,
    module: {
      rules: [{
        test: /\.json5$/,
        loader: 'json5-loader'
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          plugins: ['syntax-dynamic-import'],
          presets: [['env', {
            modules: false,
            targets: {
              browsers: ['IE 11']
            }
          }]]
        }
      }],
    }
  };
};
