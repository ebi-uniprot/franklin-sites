import { CSSProperties, useEffect, useRef, useState } from 'react';

import { Histogram as HistogramComponent } from '../src/components';

import {
  getUniformSample,
  getGaussianSample,
} from '../src/mock-data/probability-distribution-sample';

import colors from '../src/styles/colours.json';

interface Style extends CSSProperties {
  // TODO: define and extend the supported custom properties in franklin
  // TODO: find a way to expose them globally when using franklin elements
  '--main-histogram-color': string;
  '--histogram-bar-gap': string;
}

const nValues = 1000;
const gaussianSample = getGaussianSample(0, 1, nValues);
const uniformSample = getUniformSample(-10, 10, nValues);

const gaussianMin = Math.min(...gaussianSample);
const gaussianMax = Math.max(...gaussianSample);

// take about half of the values
const randomFilter = () => Math.random() > 0.5;

const meta: Meta<typeof HistogramComponent> = {
  component: HistogramComponent,
  title: 'Visualisation/Histogram',
  parameters: {
    purposeFunction: {
      purpose: 'purpose',
      function: 'function',
    },
  },
  argTypes: {
    nBins: { control: 'number', min: 1, step: 1, name: 'Number of bins' },
    color: {
      control: 'select',
      name: '--main-histogram-color',
      options: colors,
    },
  },
  args: {
    nBins: 20,
    xLabel: 'X label',
    yLabel: 'Y label',
    barGap: '-1px',
  },
  render: ({ values, nBins, xLabel, yLabel, barGap, color }) => (
    <HistogramComponent
      values={values}
      nBins={nBins}
      xLabel={xLabel}
      yLabel={yLabel}
      style={
        {
          '--main-histogram-color': color,
          '--histogram-bar-gap': barGap,
        } as Style
      }
    />
  ),
};

export const Gaussian: Story = {
  args: {
    ...meta.args,
    values: gaussianSample,
  },
};

export const Uniform: Story = {
  args: {
    ...meta.args,
    values: uniformSample,
  },
};

const ChangingGaussianRender = ({ nBins, xLabel, yLabel, barGap, color }) => {
  const interval = useRef<number>();

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
    <HistogramComponent
      values={filteredSample}
      unfilteredValues={gaussianSample}
      nBins={nBins}
      xLabel={xLabel}
      yLabel={yLabel}
      min={gaussianMin}
      max={gaussianMax}
      unfilteredValuesShadow={0.1}
      style={
        {
          '--main-histogram-color': color,
          '--histogram-bar-gap': barGap,
        } as Style
      }
    />
  );
};

export const ChangingGaussian: Story = {
  args: {
    ...meta.args,
  },
  render: ChangingGaussianRender,
};

export default meta;

type Story = StoryObj<typeof HistogramComponent>;
