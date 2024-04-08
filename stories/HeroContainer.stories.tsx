import { Meta, StoryObj } from '@storybook/react';
import { loremIpsum } from 'lorem-ipsum';

import { HeroContainer as HeroContainerComponent } from '../src/components';

const meta: Meta<typeof HeroContainerComponent> = {
  component: HeroContainerComponent,
  title: 'Layout/Hero Container',
  parameters: {
    purposeFunction: {
      purpose: 'Differentiate section from others',
      function: 'Highlight a specific section',
    },
  },
  args: {
    title: 'Title',
    noSidePadding: false,
  },
  render: ({ title, noSidePadding }) => (
    <HeroContainerComponent title={title} noSidePadding={noSidePadding}>
      {loremIpsum({ count: 25, units: 'words' })}
    </HeroContainerComponent>
  ),
};

export default meta;

type Story = StoryObj<typeof HeroContainerComponent>;

export const HeroContainer: Story = {};
