import { number } from '@storybook/addon-knobs';

import { Loader as LoaderComponent } from '../src/components';

export default {
  title: 'Core/Loader',
  parameters: {
    purposeFunction: {
      purpose: '',
      function: '',
    },
  },
};

export const Loader = () => (
  <div style={{ width: '100%', height: '300px', background: 'lightblue' }}>
    <LoaderComponent
      progress={number(
        'Progress',
        0.5,
        { min: 0, step: 0.01, max: 1 },
        'Props'
      )}
    />
  </div>
);
