import { type CSSProperties, useState } from 'react';
import { fn } from 'storybook/test';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { HistogramFilter as HistogramFilterComponent } from '../src/components';
import { type Range } from '../src/components/histogram';

import {
  getUniformSample,
  getGaussianSample,
} from '../src/mock-data/probability-distribution-sample';

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
  onRangeSelected: (range: Range) => unknown;
};

const StoryRender = ({
  values,
  barGap,
  color,
  outRangeColor,
  onRangeSelected,
}: StoryProps) => {
  const [selectedRange, setSelectedRange] = useState<Range>([min, max]);

  const handleChange = (range: Range) => {
    onRangeSelected(range);
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
    color: {
      control: 'select',
      name: '--main-histogram-color',
      options: [
        'var(--fr--color-sapphire-blue)',
        'var(--fr--color-sea-blue)',
        'var(--fr--color-vivid-cerulean)',
        'var(--fr--color-medium-turquoise)',
        'var(--fr--color-gainsborough)',
        'var(--fr--color-weldon-blue)',
        'var(--fr--color-platinum)',
        'white',
        'blue',
      ],
    },
    outRangeColor: {
      control: 'select',
      name: '--out-range-histogram-color',
      options: [
        'var(--fr--color-sapphire-blue)',
        'var(--fr--color-sea-blue)',
        'var(--fr--color-vivid-cerulean)',
        'var(--fr--color-medium-turquoise)',
        'var(--fr--color-gainsborough)',
        'var(--fr--color-weldon-blue)',
        'var(--fr--color-platinum)',
        'white',
        'blue',
      ],
    },
  },
  args: {
    // selectedRange: [min, max],
    barGap: '-1px',
    color: 'var(--fr--color-weldon-blue)',
    outRangeColor: 'var(--fr--color-platinum)',
    onRangeSelected: fn(),
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
