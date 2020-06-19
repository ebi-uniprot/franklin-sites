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

const nValues = 1000;
const gaussianSample = getGaussianSample(0, 1, nValues);
const uniformSample = getUniformSample(-10, 10, nValues);

export const Gaussian = () => <Histogram values={gaussianSample} nBins={20} />;
export const Uniform = () => <Histogram nBins={10} values={uniformSample} />;
