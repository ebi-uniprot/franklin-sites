const path = require('path');
const jsonImporter = require('node-sass-json-importer');

module.exports = async ({ config, mode }) => {
  // Remove default svg loader
  config.module.rules = config.module.rules.map((rule) => {
    if (
      String(rule.test) ===
      String(
        /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/
      )
    ) {
      return {
        ...rule,
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
      };
    }
    return rule;
  });

  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'sass-loader',
        options: {
          sassOptions: {
            includePaths: [
              path.resolve(__dirname, '../src/styles'),
              path.resolve(__dirname, '../src/app/styles'),
            ],
            importer: jsonImporter({ convertCase: true }),
          },
        },
      },
    ],
    include: path.resolve(__dirname, '../'),
  });

  // use react-svg-loader for svg files in jsx
  config.module.rules.push({
    test: /\.svg$/i,
    issuer: /\.(j|t)sx?$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          svgoConfig: {
            plugins: {
              removeViewBox: false,
            },
          },
        },
      },
    ],
  });

  // Otherwise use svg-url-loader
  config.module.rules.push({
    test: /\.svg$/i,
    issuer: /\.(css|scss)?$/,
    loader: 'svg-url-loader',
  });

  return config;
};
