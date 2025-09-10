import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  framework: '@storybook/react-vite',
  stories: ['../stories/**/*.stories.@(ts|md)x'],
  core: {
    disableTelemetry: true,
    builder: '@storybook/builder-vite',
  },
  addons: ['@storybook/addon-docs'],
  staticDirs: ['../assets'],
  docs: {},
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};
export default config;
