module.exports = {
  stories: ['../**/*.stories.(j|t)sx'],
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-actions/register',
    './purposeFunction/register.js',
  ],
};
