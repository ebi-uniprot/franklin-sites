import { Meta, StoryObj } from '@storybook/react';
import { DoughnutChart as DoughnutChartComponent } from '../src/components';

const meta: Meta<typeof DoughnutChartComponent> = {
  component: DoughnutChartComponent,
  title: 'Visualisation',
  parameters: {
    purposeFunction: {
      purpose: 'Highlight a ratio.',
      function:
        'Used to represent numbers which represent a quantity relative to a total. By default shown as percentages but custom text can be shown instead',
    },
  },
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
  },
  args: {
    percent: 100 / 3,
    children: '1/3',
    colorClass: 'colour-uniref',
    bgColorClass: 'colour-sky-white',
  },
  render: ({ colorClass, bgColorClass, children, percent, size }) => (
    <DoughnutChartComponent
      percent={percent}
      colorClass={colorClass}
      bgColorClass={bgColorClass}
      size={size}
    >
      {children}
    </DoughnutChartComponent>
  ),
};

export default meta;

type Story = StoryObj<typeof DoughnutChartComponent>;

export const DoughnutChart: Story = {};
