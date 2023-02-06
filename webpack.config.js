/* eslint-disable @typescript-eslint/no-var-requires, global-require, import/no-extraneous-dependencies */
const jsonImporter = require('node-sass-json-importer');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
  {
    name: 'library',
    mode: 'production',
    entry: [`${__dirname}/src/index.ts`],
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
              // dumps CSS into a file
              loader: MiniCssExtractPlugin.loader,
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
              options: {
                prettier: false,
                svgo: false,
                svgoConfig: {
                  plugins: [{ removeViewBox: false }],
                },
              },
            },
          ],
          type: 'asset/resource',
          generator: {
            filename: 'svg/[name][ext]',
          },
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
      new MiniCssExtractPlugin({ filename: 'styles.css', runtime: false }),
    ],
    stats: {
      children: false,
      assetsSort: '!size',
    },
  },
];
