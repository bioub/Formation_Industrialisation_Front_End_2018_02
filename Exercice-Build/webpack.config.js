const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index',
  output: {
    filename: 'app.[hash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ],
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
            browsers: ['Chrome 62']
          }
        }]]
      }
    }],
  }
};
