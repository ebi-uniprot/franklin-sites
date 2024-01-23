import type { Meta, StoryObj } from '@storybook/react';
import { loremIpsum } from 'lorem-ipsum';

import { Accordion } from '../src/components';

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: 'Layout/Accordion',
  parameters: {
    purposeFunction: {
      function: 'Show/hide blocks of content',
      purpose: 'Minimise information-overload',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    accordionTitle: 'Title',
    count: 0,
    alwaysOpen: false,
    initialOpen: false,
    children: loremIpsum({ count: 25, units: 'words' }),
  },
};
