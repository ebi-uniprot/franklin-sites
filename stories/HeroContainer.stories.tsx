import type { Meta, StoryObj } from '@storybook/react-vite';
import { loremIpsum } from 'lorem-ipsum';

import { HeroContainer as HeroContainerComponent } from '../src/components';

const meta: Meta<typeof HeroContainerComponent> = {
  component: HeroContainerComponent,
  title: 'Layout/Hero Container',
  args: {
    headingContent: 'Heading Content',
    noSidePadding: false,
  },
  render: ({ headingContent, noSidePadding }) => (
    <HeroContainerComponent
      headingContent={headingContent}
      noSidePadding={noSidePadding}
    >
      {loremIpsum({ count: 25, units: 'words' })}
    </HeroContainerComponent>
  ),
};

export default meta;

type Story = StoryObj<typeof HeroContainerComponent>;

export const HeroContainer: Story = {};
