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

const [min, max] = [0, 100];
const nValues = 1000;
const gaussianSample = getGaussianSample(
  (max - min) / 2,
  max / 8,
  nValues,
  min,
  max
);

const uniformSample = getUniformSample(min, max, nValues);

export const Gaussian = () => (
  <Histogram min={min} max={max} values={gaussianSample} binSize={5} />
);

export const Uniform = () => <Histogram nBins={10} values={uniformSample} />;
