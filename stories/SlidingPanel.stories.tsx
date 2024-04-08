import { action } from '@storybook/addon-actions';
import { loremIpsum } from 'lorem-ipsum';

import { Meta, StoryObj } from '@storybook/react';
import { SlidingPanel as SlidingPanelComponent } from '../src/components';

const meta: Meta<typeof SlidingPanelComponent> = {
  title: 'Layout/Sliding Panel',
  component: SlidingPanelComponent,
  parameters: {
    purposeFunction: {
      purpose:
        'Display additional information or options without leaving the page',
      function: 'Overlayed on top of the page, obfuscating part of the page.',
    },
  },
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
  },
  render: ({ title, position, size }) => (
    <SlidingPanelComponent
      title={title}
      position={position}
      size={size}
      onClose={action('Closing')}
      pathname="#"
    >
      {loremIpsum({ count: 25 })}
    </SlidingPanelComponent>
  ),
};

export default meta;

type Story = StoryObj<typeof SlidingPanelComponent>;

export const SlidingPanel: Story = {};
