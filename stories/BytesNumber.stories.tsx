import type { Meta, StoryObj } from '@storybook/react-vite';

import { BytesNumber as BytesNumberComponent } from '../src/components';

const meta: Meta<typeof BytesNumberComponent> = {
  component: BytesNumberComponent,
  title: 'Visualisation',
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

export const BytesNumber: Story = {};
