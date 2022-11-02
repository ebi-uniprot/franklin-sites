const path = require('path');

// eslint-disable-next-line import/no-extraneous-dependencies
const jsonImporter = require('node-sass-json-importer');
// eslint-disable-next-line import/no-extraneous-dependencies
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = [
  {
    name: 'library',
    mode: 'production',
    entry: [`${__dirname}/src/components/index.ts`],
    output: {
      path: `${__dirname}/dist`,
      filename: 'franklin-components.js',
      libraryTarget: 'commonjs',
      clean: true,
    },
    devtool: 'source-map',
    externals: {
      react: 'react',
      'react-dom': 'react-dom',
      'react-router-dom': 'react-router-dom',
    },
    resolve: {
      extensions: ['.jsx', '.js', '.tsx', '.ts'],
    },
    module: {
      rules: [
        {
          test: /\.(j|t)sx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        },
        {
          test: /\.(scss|sass|css)$/,
          sideEffects: true,
          use: [
            {
              // translates CSS into something importable into the code
              loader: 'style-loader',
            },
            {
              loader: 'css-loader', // translates CSS into CommonJS
              options: {
                esModule: false,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  importer: jsonImporter({ convertCase: true }),
                },
              },
            },
          ],
        },
        {
          test: /\.svg$/i,
          issuer: /\.(j|t)sx?$/,
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
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: 'disabled',
        generateStatsFile: true,
        statsOptions: { source: false },
      }),
    ],
    stats: {
      children: false,
      assetsSort: '!size',
    },
  },
];
