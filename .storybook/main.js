module.exports = {
  core: {
    builder: 'webpack5',
    disableTelemetry: true,
  },
  stories: ['../stories/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-actions',
    './purposeFunction/register.js',
  ],
  framework: '@storybook/react',
  staticDirs: ['../assets'],
  docsPage: {
    docs: 'automatic',
  },
};
