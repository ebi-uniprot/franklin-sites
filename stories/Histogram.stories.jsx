import React, { useEffect, useRef, useState } from 'react';

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

const gaussianMin = Math.min(...gaussianSample);
const gaussianMax = Math.max(...gaussianSample);

const randomFilter = () => Math.random() > 0.5;

const ChangingGaussianComponent = () => {
  const interval = useRef();

  // eslint-disable-next-line no-shadow
  const [filteredSample, setFilteredSample] = useState(
    gaussianSample.filter(randomFilter)
  );

  useEffect(() => {
    interval.current = setInterval(() => {
      setFilteredSample(gaussianSample.filter(randomFilter));
    }, 3000);
    return () => clearInterval(interval.current);
  }, []);

  return (
    <Histogram
      values={filteredSample}
      nBins={20}
      min={gaussianMin}
      max={gaussianMax}
    />
  );
};

export const Gaussian = () => <Histogram values={gaussianSample} nBins={20} />;
export const Uniform = () => <Histogram nBins={10} values={uniformSample} />;
export const ChangingGaussian = () => <ChangingGaussianComponent />;
