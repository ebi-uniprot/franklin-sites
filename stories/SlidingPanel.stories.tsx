import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { loremIpsum } from 'lorem-ipsum';

import { SlidingPanel as SlidingPanelComponent } from '../src/components';

const meta: Meta<typeof SlidingPanelComponent> = {
  title: 'Layout/Sliding Panel',
  component: SlidingPanelComponent,
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'full-screen'],
      position: {
        control: 'select',
        options: ['top', 'right', 'bottom', 'left'],
      },
    },
  },
  args: {
    title: 'Title',
    size: 'medium',
    position: 'left',
    onClose: fn(),
  },
  render: ({ title, position, size, onClose }) => (
    <SlidingPanelComponent
      title={title}
      position={position}
      size={size}
      onClose={onClose}
      pathname="#"
    >
      {loremIpsum({ count: 25 })}
    </SlidingPanelComponent>
  ),
};

export default meta;

type Story = StoryObj<typeof SlidingPanelComponent>;

export const SlidingPanel: Story = {};
