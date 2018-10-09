const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = [
  {
    name: 'library',
    mode: 'production',
    entry: [`${__dirname}/src/components/index.js`],
    output: {
      path: `${__dirname}/dist`,
      filename: 'franklin-components.js',
      libraryTarget: 'commonjs',
    },
    externals: {
      react: 'react',
    },
    resolve: {
      extensions: ['.jsx', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/react'],
            },
          },
        },
        {
          test: /\.css/,
          exclude: /(node_modules)/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  },
];
