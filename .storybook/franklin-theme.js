import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: '#93d4ee',
  colorSecondary: '#006e9a',

  // UI
  appBg: 'white',
  appContentBg: '#f1f1f1',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: 'Lato, "Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,1)',

  // Toolbar default and active colors
  barTextColor: '#fefefe',
  barSelectedColor: '#f0f0f0',
  barBg: '#006e9a',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Franklin',
  brandUrl: 'https://ebi-uniprot.github.io/franklin-sites',
  brandImage: './franklin_logo.svg',
});
