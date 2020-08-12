import React from 'react';
import { LongNumber } from '../src/components';

export default {
  title: 'Visualisation/Long number',
};

export const longNumber = () => {
  return <LongNumber>{1000000000}</LongNumber>;
};

export const shortNumber = () => {
  return <LongNumber>{100}</LongNumber>;
};
