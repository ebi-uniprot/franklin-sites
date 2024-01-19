module.exports = {
  stories: ['../stories/**/*.stories.tsx'],

  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-knobs',
    '@storybook/addon-actions/register',
    './purposeFunction/register.js',
  ],

  staticDirs: ['../assets'],

  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },

  docs: {
    autodocs: true
  }
};
