import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { Histogram } from '../src/components';
import {
  getUniformSample,
  getGaussianSample,
} from '../src/mock-data/probability-distribution-sample';

export default {
  title: 'Visualisation|Histogram',
  parameters: {
    purposeFunction: {
      purpose: 'purpose',
      function: 'function',
    },
  },
};

const [min, max] = [0, 10000];
const nValues = 1000;
const gaussianSample = getGaussianSample(
  (max - min) / 2,
  max / 8,
  nValues,
  min,
  max
);
const uniformSample = getUniformSample(min, max, nValues);

export const Gaussian = () => {
  const [range, setRange] = useState([min, max]);
  const handleChange = newRange => {
    console.log(newRange);
    action(`range selected: ${newRange}`);
    setRange(newRange);
  };
  return (
    <Histogram
      min={min}
      max={max}
      selectedRange={range}
      onChange={handleChange}
      values={gaussianSample}
    />
  );
};

export const Uniform = () => {
  const [range, setRange] = useState([min, max]);

  const handleChange = newRange => {
    console.log(newRange);
    action(`range selected: ${newRange}`);
    setRange(newRange);
  };
  return (
    <Histogram
      min={min}
      max={max}
      selectedRange={range}
      onChange={handleChange}
      values={uniformSample}
    />
  );
};
