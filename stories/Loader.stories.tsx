import { Meta, StoryObj } from '@storybook/react';

import { Loader as LoaderComponent } from '../src/components';

const meta: Meta<typeof LoaderComponent> = {
  title: 'Core/Loader',
  component: LoaderComponent,
  parameters: {
    purposeFunction: {
      purpose: '',
      function: '',
    },
  },
  argTypes: {
    progress: { type: 'number', min: 0, max: 1, step: 0.01 },
  },
  args: { progress: 0.5 },
  render: ({ progress }) => (
    <div style={{ width: '100%', height: '300px', background: 'lightblue' }}>
      <LoaderComponent progress={progress} />
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof LoaderComponent>;

export const HeroHeader: Story = {};
