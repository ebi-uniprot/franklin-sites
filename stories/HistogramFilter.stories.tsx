import { CSSProperties, useState } from 'react';

import { withKnobs, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { HistogramFilter } from '../src/components';

import {
  getUniformSample,
  getGaussianSample,
} from '../src/mock-data/probability-distribution-sample';

import { Range } from '../src/components/histogram';

import colors from '../src/styles/colours.json';

export default {
  title: 'Forms/Histogram Filter',
  decorators: [withKnobs()],
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

interface Style extends CSSProperties {
  // TODO: define and extend the supported custom properties in franklin
  // TODO: find a way to expose them globally when using franklin elements
  '--main-histogram-color': string;
  '--out-range-histogram-color': string;
  '--histogram-bar-gap': string;
}

export const Gaussian = () => {
  const [selectedRange, setSelectedRange] = useState<Range>([min, max]);

  const handleChange = (range: Range) => {
    action('range selected')(range);
    setSelectedRange(range);
  };

  return (
    <HistogramFilter
      min={min}
      max={max}
      selectedRange={selectedRange}
      onChange={handleChange}
      values={gaussianSample}
      style={
        {
          width: '25rem',
          '--main-histogram-color': select(
            '--main-histogram-color',
            colors,
            colors.weldonBlue,
            'Custom Properties'
          ),
          '--out-range-histogram-color': select(
            '--out-range-histogram-color',
            colors,
            colors.platinum,
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

export const Uniform = () => {
  const [selectedRange, setSelectedRange] = useState<Range>([min, max]);

  const handleChange = (range: Range) => {
    action('range selected')(range);
    setSelectedRange(range);
  };

  return (
    <HistogramFilter
      min={min}
      max={max}
      selectedRange={selectedRange}
      onChange={handleChange}
      values={uniformSample}
      style={
        {
          width: '25rem',
          '--main-histogram-color': select(
            '--main-histogram-color',
            colors,
            colors.weldonBlue,
            'Custom Properties'
          ),
          '--out-range-histogram-color': select(
            '--out-range-histogram-color',
            colors,
            colors.platinum,
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
