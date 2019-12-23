const path = require('path');

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'sass-loader',
        options: {
          includePaths: [
            path.resolve(__dirname, '../src/styles'),
            path.resolve(__dirname, '../src/app/styles'),
          ],
        },
      },
    ],
    include: path.resolve(__dirname, '../'),
  });

  return config;
};
