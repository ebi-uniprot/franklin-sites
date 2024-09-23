// eslint-disable-next-line import/no-extraneous-dependencies
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
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
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              esModule: false,
            },
          },
          {
            loader: 'sass-loader',
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
    new MiniCssExtractPlugin({
      filename: 'franklin.css',
    }),
  ],
  stats: {
    children: false,
    assetsSort: '!size',
  },
};
