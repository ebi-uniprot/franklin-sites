import { CSSProperties, useState } from 'react';
import { action } from '@storybook/addon-actions';

import { Meta, StoryObj } from '@storybook/react';
import { HistogramFilter as HistogramFilterComponent } from '../src/components';
import { Range } from '../src/components/histogram';

import {
  getUniformSample,
  getGaussianSample,
} from '../src/mock-data/probability-distribution-sample';

import colors from '../src/styles/colours.json';

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

type StoryProps = React.ComponentProps<typeof HistogramFilterComponent> & {
  color: string;
  outRangeColor: string;
  barGap: string;
};

const StoryRender = ({ values, barGap, color, outRangeColor }: StoryProps) => {
  const [selectedRange, setSelectedRange] = useState<Range>([min, max]);

  const handleChange = (range: Range) => {
    action('range selected')(range);
    setSelectedRange(range);
  };

  return (
    <HistogramFilterComponent
      values={values}
      min={min}
      max={max}
      selectedRange={selectedRange}
      onChange={handleChange}
      style={
        {
          '--main-histogram-color': color,
          '--out-range-histogram-color': outRangeColor,
          '--histogram-bar-gap': barGap,
        } as Style
      }
    />
  );
};

const meta: Meta<StoryProps> = {
  component: HistogramFilterComponent,
  title: 'Forms/Histogram Filter',
  argTypes: {
    // selectedRange: {
    //   control: { type: 'range', min, max, step: 1 },
    //   name: 'min/max',
    // },
    color: {
      control: 'select',
      name: '--main-histogram-color',
      options: Object.keys(colors),
      mapping: colors,
    },
    outRangeColor: {
      control: 'select',
      name: '--out-range-histogram-color',
      options: Object.keys(colors),
      mapping: colors,
    },
  },
  args: {
    // selectedRange: [min, max],
    barGap: '-1px',
    color: 'weldonBlue',
    outRangeColor: 'platinum',
  },
  render: StoryRender,
};

export default meta;

type Story = StoryObj<typeof HistogramFilterComponent>;

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
