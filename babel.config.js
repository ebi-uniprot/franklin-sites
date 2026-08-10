export default function (api) {
  api.cache(true);

  return {
    targets: { chrome: '80', edge: '18', firefox: '68', safari: '13' },
    presets: [
      '@babel/preset-env',
      ['@babel/preset-react', { runtime: 'automatic' }],
      '@babel/preset-typescript',
    ],
    plugins: [
      [
        'babel-plugin-polyfill-corejs3',
        { method: 'usage-global', version: '3.49' },
      ],
    ],
  };
}
