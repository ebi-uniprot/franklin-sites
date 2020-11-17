module.exports = {
  stories: ['../**/*.stories.jsx', '../**/*.stories.tsx'],
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-actions/register',
    './purposeFunction/register.js',
  ],
};
