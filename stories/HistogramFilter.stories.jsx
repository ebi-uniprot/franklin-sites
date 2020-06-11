import React, { useState } from 'react';
import random from 'random';
import { HistogramFilter } from '../src/components';
import { fillArray } from '../src/utils';

export default {
  title: 'Forms|Histogram Filter',
  parameters: {
    purposeFunction: {
      purpose: 'purpose',
      function: 'function',
    },
  },
};

const [min, max] = [0, 100];
const normal = random.normal(50, 10);
const gaussianValues = fillArray(100, normal).map(number => {
  if (number < min) {
    return min;
  }
  if (number > max) {
    return max;
  }
  return number;
});
const uniformValues = [...Array(100).keys()];

export const Gaussian = () => {
  const [range, setRange] = useState([min, max]);
  const handleChange = ({ values }) => {
    console.log(values);
    setRange(values);
  };
  return (
    <HistogramFilter
      min={min}
      max={max}
      selectedRange={range}
      onChange={handleChange}
      values={gaussianValues}
    />
  );
};

export const Uniform = () => {
  const [range, setRange] = useState([min, max]);

  const handleChange = ({ values }) => {
    console.log(values);
    setRange(values);
  };
  return (
    <HistogramFilter
      min={min}
      max={max}
      selectedRange={range}
      onChange={handleChange}
      values={uniformValues}
    />
  );
};
