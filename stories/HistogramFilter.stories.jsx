import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { HistogramFilter } from '../src/components';
import {
  getUniformSample,
  getGaussianSample,
} from '../src/mock-data/probability-distribution-sample';

export default {
  title: 'Forms|Histogram Filter',
  parameters: {
    purposeFunction: {
      purpose: 'purpose',
      function: 'function',
    },
  },
};

const [min, max] = [0, 1000];
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
    <div style={{ width: '20rem' }}>
      <HistogramFilter
        min={min}
        max={max}
        selectedRange={range}
        onChange={handleChange}
        values={gaussianSample}
      />
    </div>
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
    <div style={{ width: '20rem' }}>
      <HistogramFilter
        min={min}
        max={max}
        selectedRange={range}
        onChange={handleChange}
        values={uniformSample}
      />
    </div>
  );
};
