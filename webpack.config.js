const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  context: __dirname,
  devtool: 'inline-sourcemap',
  entry: ['@babel/polyfill', __dirname + '/src/ui/index.jsx'],
  output: {
    path: __dirname + '/build',
    filename: 'app.[hash].bundle.js'
  },
  resolve: {
    extensions: ['.jsx', '.js']
  },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }]
      },
      {
        test: /\.(css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      }, {
        test: /\.svg$/,
        use: [{
            loader: "babel-loader"
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true // true outputs JSX tags
            }
          }
        ]
      }, {
        test: /\.(jpe?g|png|gif|ico)$/i,
        loader: 'file-loader?name=[name].[ext]'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new MiniCssExtractPlugin({
      filename: "franklin.css"
    }),
    new HtmlWebPackPlugin({
      template: __dirname + '/public/index.html',
      favicon: __dirname + '/src/ui/favicon.ico',
      filename: 'index.html'
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3100,
      proxy: 'http://localhost:39093/',
      open: false,
      ui: false
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    host: 'localhost',
    port: 3909,
    historyApiFallback: true,
  }
};
