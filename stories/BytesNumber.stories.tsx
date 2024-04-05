import { Meta, StoryObj } from '@storybook/react';

import { BytesNumber as BytesNumberComponent } from '../src/components';

const meta: Meta<typeof BytesNumberComponent> = {
  component: BytesNumberComponent,
  title: 'Visualisation/Bytes number',
  parameters: {
    purposeFunction: {
      purpose: '',
      function: '',
    },
  },
  argTypes: {
    decimals: {
      control: { type: 'number' },
    },
    children: {
      control: { type: 'number' },
      name: 'bytes',
    },
  },
  args: {
    children: 1024,
  },
  render: ({ decimals, children }) => (
    <BytesNumberComponent decimals={decimals}>{children}</BytesNumberComponent>
  ),
};

export default meta;

type Story = StoryObj<typeof BytesNumberComponent>;

export const Bubble: Story = {};
