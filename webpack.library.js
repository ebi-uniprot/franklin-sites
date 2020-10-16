const path = require('path');

// eslint-disable-next-line import/no-extraneous-dependencies
const jsonImporter = require('node-sass-json-importer');

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
      react: { commonjs: 'react' },
      'react-dom': { commonjs: 'react-dom' },
      'react-router-dom': { commonjs: 'react-router-dom' },
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
          test: /\.(scss|sass|css)$/,
          use: [
            {
              loader: 'style-loader', // creates style nodes from JS strings
            },
            {
              loader: 'css-loader', // translates CSS into CommonJS
            },
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  includePaths: [path.resolve(__dirname, 'src/styles')],
                  importer: jsonImporter({ convertCase: true }),
                },
              },
            },
          ],
        },
        {
          test: /\.svg$/i,
          issuer: /\.jsx?$/,
          use: [
            {
              loader: '@svgr/webpack',
            },
          ],
        },
        {
          test: /\.svg$/i,
          issuer: /\.(css|scss)?$/,
          loader: 'svg-url-loader',
        },
      ],
    },
  },
];
