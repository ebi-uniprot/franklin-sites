import {
  CSSProperties,
  ComponentProps,
  FC,
  useEffect,
  useRef,
  useState,
} from 'react';

import { Meta, StoryObj } from '@storybook/react';
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

type OtherArgs = { color: string; barGap?: string };

type WithNBins = FC<
  Omit<ComponentProps<typeof HistogramComponent>, 'position'> &
    OtherArgs & {
      nBins: number;
      binSize: never;
    }
>;

type WithBinSize = FC<
  Omit<ComponentProps<typeof HistogramComponent>, 'position'> &
    OtherArgs & {
      nBins?: number;
      binSize: number;
    }
>;

const meta: Meta<WithNBins> = {
  component: HistogramComponent,
  title: 'Visualisation/Histogram',
  argTypes: {
    color: {
      control: 'select',
      name: '--main-histogram-color',
      options: Object.keys(colors),
      mapping: colors,
    },
  },
  args: {
    xLabel: 'X label',
    yLabel: 'Y label',
    barGap: '-1px',
  },
  render: ({ values, nBins, binSize, xLabel, yLabel, barGap, color }) => (
    <HistogramComponent
      values={values}
      nBins={nBins}
      binSize={binSize}
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

export const Gaussian: StoryObj<WithNBins> = {
  argTypes: {
    ...meta.argTypes,
    nBins: { control: 'number', min: 1, step: 1, name: 'Number of bins' },
  },
  args: {
    ...meta.args,
    values: gaussianSample,
    nBins: 20,
  },
};

export const Uniform: StoryObj<WithBinSize> = {
  argTypes: {
    ...meta.argTypes,
    binSize: { control: 'number', min: 1, step: 1 },
  },
  args: {
    ...meta.args,
    values: uniformSample,
    binSize: 1,
  },
};

const ChangingGaussianRender: typeof meta.render = ({
  nBins,
  xLabel,
  yLabel,
  barGap,
  color,
}) => {
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
      nBins={nBins!}
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

export const ChangingGaussian: StoryObj<WithNBins> = {
  argTypes: {
    ...meta.argTypes,
    nBins: { control: 'number', min: 1, step: 1, name: 'Number of bins' },
  },
  args: {
    ...meta.args,
    nBins: 20,
  },
  render: ChangingGaussianRender,
};

export default meta;
