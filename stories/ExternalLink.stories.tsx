import type { Meta, StoryObj } from '@storybook/react-vite';

import { ExternalLink as EL } from '../src/components';

const meta: Meta<typeof EL> = {
  component: EL,
  title: 'Core/External link',
};
export default meta;

type Story = StoryObj<typeof EL>;

export const ExternalLink: Story = {
  args: {
    url: 'https://www.ebi.ac.uk/',
    children: 'external link',
    noIcon: false,
    tidyUrl: false,
  },
};

export const ExternalLinkWithoutPassingText: Story = {
  args: {
    ...ExternalLink.args,
    children: undefined,
  },
};

export const ExternalLinkWithNullUrl: Story = {
  args: {
    ...ExternalLink.args,
    url: null,
  },
};
