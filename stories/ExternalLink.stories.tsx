import type { Meta, StoryObj } from '@storybook/react';

import { ExternalLink } from '../src/components';

const meta: Meta<typeof ExternalLink> = {
  component: ExternalLink,
  title: 'Core/External link',
  parameters: {
    purposeFunction: {
      purpose:
        'Indicate to the user that the link will take them to another website.',
      function: 'Provide a link to another web resource.',
    },
  },
};
export default meta;

type Story = StoryObj<typeof ExternalLink>;

export const Default: Story = {
  args: {
    url: 'https://www.ebi.ac.uk/',
    children: 'external link',
    noIcon: false,
    tidyUrl: false,
  },
};

export const ExternalLinkWithoutPassingText: Story = {
  args: {
    ...Default.args,
    children: undefined,
  },
};

export const ExternalLinkWithNullUrl: Story = {
  args: {
    ...Default.args,
    url: null,
  },
};
