import type { Meta, StoryObj } from '@storybook/react-vite';

import { PageIntro as PageIntroComponent } from '../src/components';

import { getLipsumSentences } from '../src/mock-data/lipsum';

const meta: Meta<typeof PageIntroComponent> = {
  title: 'Layout/Page Intro',
  args: { headingPostscript: '' },
  render: ({ headingPostscript }) => (
    <PageIntroComponent
      heading="UniProt"
      resultsCount={1000}
      headingPostscript={headingPostscript}
    >
      {getLipsumSentences()}
    </PageIntroComponent>
  ),
};

export default meta;

type Story = StoryObj<typeof PageIntroComponent>;

export const Message: Story = {};
