const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.[hash].bundle.js',
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: `${__dirname}/404.html`,
      filename: '404.html',
    }),
    // Minify CSS
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
    new webpack.DefinePlugin({ BASE_URL: JSON.stringify('/franklin-sites') }),
  ],
});
