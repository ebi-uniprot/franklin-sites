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
const randomNumbers = fillArray(100, normal).map(number => {
  if (number < min) {
    return min;
  }
  if (number > max) {
    return max;
  }
  return number;
});

console.log(randomNumbers);

export const heroHeader = () => {
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
      values={randomNumbers}
    />
  );
};
