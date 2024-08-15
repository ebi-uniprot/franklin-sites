import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.tsx'],

  core: {
    disableTelemetry: true,
  },

  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-webpack5-compiler-babel',
  ],

  staticDirs: ['../assets'],

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};
export default config;
