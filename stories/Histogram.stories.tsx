import { CSSProperties, useEffect, useRef, useState } from 'react';

import { withKnobs, select, text, number } from '@storybook/addon-knobs';

import { Histogram } from '../src/components';

import {
  getUniformSample,
  getGaussianSample,
} from '../src/mock-data/probability-distribution-sample';

import colors from '../src/styles/colours.json';

export default {
  title: 'Visualisation/Histogram',
  decorators: [withKnobs()],
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

// take about half of the values
const randomFilter = () => Math.random() > 0.5;

interface Style extends CSSProperties {
  // TODO: define and extend the supported custom properties in franklin
  // TODO: find a way to expose them globally when using franklin elements
  '--main-histogram-color': string;
  '--histogram-bar-gap': string;
}

export const ChangingGaussian = () => {
  const interval = useRef<number>();

  // eslint-disable-next-line no-shadow
  const [filteredSample, setFilteredSample] = useState(
    gaussianSample.filter(randomFilter)
  );

  useEffect(() => {
    interval.current = window.setInterval(() => {
      setFilteredSample(gaussianSample.filter(randomFilter));
    }, 3000);
    return () => window.clearInterval(interval.current);
  }, []);

  return (
    <Histogram
      values={filteredSample}
      unfilteredValues={gaussianSample}
      nBins={number('Number of bins', 20, { min: 1, step: 1 }, 'Props')}
      min={gaussianMin}
      max={gaussianMax}
      xLabel={text('X label', 'Value', 'Props')}
      yLabel={text('Y label', 'Count', 'Props')}
      unfilteredValuesShadow={0.1}
      style={
        {
          '--main-histogram-color': select(
            '--main-histogram-color',
            colors,
            colors.weldonBlue,
            'Custom Properties'
          ),
          '--histogram-bar-gap': text(
            '--histogram-bar-gap',
            '-1px',
            'Custom Properties'
          ),
        } as Style
      }
    />
  );
};

export const Gaussian = () => (
  <Histogram
    values={gaussianSample}
    nBins={number('Number of bins', 20, { min: 1, step: 1 }, 'Props')}
    xLabel={text('X label', 'Value', 'Props')}
    yLabel={text('Y label', 'Count', 'Props')}
    style={
      {
        '--main-histogram-color': select(
          '--main-histogram-color',
          colors,
          colors.weldonBlue,
          'Custom Properties'
        ),
        '--histogram-bar-gap': text(
          '--histogram-bar-gap',
          '-1px',
          'Custom Properties'
        ),
      } as Style
    }
  />
);

export const Uniform = () => (
  <Histogram
    values={uniformSample}
    binSize={number('Bin size', 1, undefined, 'Props')}
    xLabel={text('X label', 'Value', 'Props')}
    yLabel={text('Y label', 'Count', 'Props')}
    style={
      {
        '--main-histogram-color': select(
          '--main-histogram-color',
          colors,
          colors.weldonBlue,
          'Custom Properties'
        ),
        '--histogram-bar-gap': text(
          '--histogram-bar-gap',
          '-1px',
          'Custom Properties'
        ),
      } as Style
    }
  />
);
