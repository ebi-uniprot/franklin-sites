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
  args: {
    children: 1024,
    decimals: 0,
  },
  render: ({ decimals, children }) => (
    <BytesNumberComponent decimals={decimals}>{children}</BytesNumberComponent>
  ),
};

export default meta;

type Story = StoryObj<typeof BytesNumberComponent>;

export const Bubble: Story = {};
