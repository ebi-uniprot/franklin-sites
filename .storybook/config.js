import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import '../src/styles/index.scss';

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

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
