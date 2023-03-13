import { number } from '@storybook/addon-knobs';

import { BytesNumber } from '../src';

export default {
  title: 'Visualisation/Bytes number',
};

export const bytesNumber = () => (
  <BytesNumber decimals={number('decimals', 0)}>
    {number('bytes', 1024)}
  </BytesNumber>
);
