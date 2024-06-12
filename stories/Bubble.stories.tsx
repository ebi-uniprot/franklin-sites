import { CSSProperties } from 'react';

import { Meta, StoryObj } from '@storybook/react';
import { Bubble as BubbleComponent } from '../src/components';

import colors from '../src/styles/colours.json';

const meta: Meta<typeof BubbleComponent> = {
  component: BubbleComponent,
  title: 'Visualisation',
  argTypes: {
    children: {
      control: { type: 'number', min: 400, max: 1200, step: 50 },
      name: 'children (bubbble number)',
    },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    color: { control: 'select', name: '--main-bubble-color', options: colors },
  },
  args: { children: 20, color: colors.seaBlue },
  render: ({ children, size, color }) => (
    <BubbleComponent
      size={size}
      style={
        {
          '--main-bubble-color': color,
        } as CSSProperties
      }
    >
      {children}
    </BubbleComponent>
  ),
};

export default meta;

type Story = StoryObj<typeof BubbleComponent>;

export const Bubble: Story = {};
