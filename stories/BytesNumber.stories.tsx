import { number } from '@storybook/addon-knobs';

import { BytesNumber as BytesNumberComponent } from '../src/components';

export default {
  title: 'Visualisation/Bytes number',
};

export const BytesNumber = () => (
  <BytesNumberComponent decimals={number('decimals', 0)}>
    {number('bytes', 1024)}
  </BytesNumberComponent>
);
