// .storybook/manager.js

import { addons } from 'storybook/manager-api';
import franklinTheme from './franklin-theme';

addons.setConfig({
  theme: franklinTheme,
});
