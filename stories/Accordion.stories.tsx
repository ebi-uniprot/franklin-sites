import type { Meta, StoryObj } from '@storybook/react';
import { loremIpsum } from 'lorem-ipsum';

import { Accordion as AccordionComponent } from '../src/components';

const meta: Meta<typeof AccordionComponent> = {
  component: AccordionComponent,
  title: 'Layout',
  args: {
    accordionTitle: 'Title',
    count: 0,
    alwaysOpen: false,
    initialOpen: false,
    children: loremIpsum({ count: 25, units: 'words' }),
  },
};
export default meta;

type Story = StoryObj<typeof AccordionComponent>;

export const Accordion: Story = {};
