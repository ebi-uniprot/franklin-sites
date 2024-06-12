import { Meta, StoryObj } from '@storybook/react';

import { PageIntro as PageIntroComponent } from '../src/components';

import { getLipsumSentences } from '../src/mock-data/lipsum';

const meta: Meta<typeof PageIntroComponent> = {
  title: 'Layout/Page Intro',
  args: { titlePostscript: '' },
  render: ({ titlePostscript }) => (
    <PageIntroComponent
      title="UniProt"
      resultsCount={1000}
      titlePostscript={titlePostscript}
    >
      {getLipsumSentences()}
    </PageIntroComponent>
  ),
};

export default meta;

type Story = StoryObj<typeof PageIntroComponent>;

export const Message: Story = {};
