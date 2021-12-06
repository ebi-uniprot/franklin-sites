module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../stories/**/*.stories.jsx', '../stories/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-actions/register',
    './purposeFunction/register.js',
  ],
  staticDirs: ['../assets'],
};
