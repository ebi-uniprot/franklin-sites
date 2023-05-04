const path = require('path');
const jsonImporter = require('node-sass-json-importer');

module.exports = async ({ config }) => {
  // Remove default svg loader
  config.module.rules = config.module.rules.map((rule) => {
    // NOTE: there should be a better way to deal with this as it will cause
    // issues everytime storybook updates the rule test to add/remove formats.
    if (
      String(rule.test) ===
      String(
        /\.(svg|ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/
      )
    ) {
      return {
        ...rule,
        test: /\.(ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
      };
    }
    return rule;
  });

  config.module.rules.push({
    test: /\.scss$/,
    sideEffects: true,
    use: [
      {
        loader: 'style-loader', // creates style nodes from JS strings
      },
      {
        // translates CSS into something importable into the code
        loader: 'css-loader',
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
    include: path.resolve(__dirname, '../'),
  });

  // use react-svg-loader for svg files in react components
  config.module.rules.push(
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
    },
    {
      test: /\.svg$/i,
      issuer: /\.(css|scss)?$/,
      loader: 'svg-url-loader',
    }
  );

  // Otherwise use svg-url-loader
  config.module.rules.push({
    test: /\.svg$/i,
    issuer: /\.(css|scss)?$/,
    loader: 'svg-url-loader',
  });

  return config;
};
