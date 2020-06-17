import React, { useState } from 'react';
import random from 'random';
import { Histogram } from '../src/components';
import { fillArray } from '../src/utils';

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
const normal = random.normal((max - min) / 2, max / 8);
const gaussianValues = fillArray(100, normal).map(number => {
  if (number < min) {
    return min;
  }
  if (number > max) {
    return max;
  }
  return number;
});
const uniformValues = [...Array(max).keys()];

export const Gaussian = () => {
  const [range, setRange] = useState([min, max]);
  const handleChange = newRange => {
    console.log(newRange);
    setRange(newRange);
  };
  return (
    <div style={{ width: '20rem' }}>
      <Histogram
        min={min}
        max={max}
        selectedRange={range}
        onChange={handleChange}
        values={gaussianValues}
      />
    </div>
  );
};

export const Uniform = () => {
  const [range, setRange] = useState([min, max]);

  const handleChange = newRange => {
    console.log(newRange);
    setRange(newRange);
  };
  return (
    <div style={{ width: '20rem' }}>
      <Histogram
        min={min}
        max={max}
        selectedRange={range}
        onChange={handleChange}
        values={uniformValues}
      />
    </div>
  );
};
