import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import franklinTheme from './franklin-theme';
import '../src/styles/index.scss';

addDecorator(withInfo);

addDecorator(storyFn => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '70vh',
    }}
  >
    {storyFn()}
  </div>
));

addParameters({
  options: {
    theme: franklinTheme,
  },
});

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
