module.exports = {
  stories: ['../**/*.stories.jsx'],
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-actions/register',
    './purposeFunction/register.js',
  ],
};
