// eslint-disable-next-line func-names
module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            chrome: '80',
            edge: '18',
            firefox: '68',
            safari: '13',
          },
          useBuiltIns: 'usage',
          corejs: { version: 3 },
        },
      ],
      [
        '@babel/preset-react',
        {
          runtime: 'automatic',
        },
      ],
      '@babel/preset-typescript',
    ],
  };
};
