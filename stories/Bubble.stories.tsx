import { type CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Bubble as BubbleComponent } from '../src/components';

const meta: Meta<typeof BubbleComponent> = {
  component: BubbleComponent,
  title: 'Visualisation',
  argTypes: {
    children: {
      control: { type: 'number', min: 400, max: 1200, step: 50 },
      name: 'children (bubbble number)',
    },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    color: {
      control: 'select',
      name: '--main-bubble-color',
      options: [
        'var(--fr--color-sapphire-blue)',
        'var(--fr--color-sea-blue)',
        'var(--fr--color-vivid-cerulean)',
        'var(--fr--color-medium-turquoise)',
        'var(--fr--color-gainsborough)',
        'white',
        'blue',
      ],
    },
  },
  args: { children: 20, color: 'var(--fr--color-sea-blue)' },
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
