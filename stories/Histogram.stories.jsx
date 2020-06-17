import React from 'react';
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

const [min, max] = [0, 10];
const nValues = 1000;
const gaussianSample = getGaussianSample(0, 1, nValues);

const uniformSample = getUniformSample(min, max, nValues);

export const Gaussian = () => <Histogram values={gaussianSample} />;

export const Uniform = () => (
  <Histogram min={min} max={max} values={uniformSample} />
);
