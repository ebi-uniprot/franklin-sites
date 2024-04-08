import { Meta, StoryObj } from '@storybook/react';

import { PageIntro as PageIntroComponent } from '../src/components';

import { getLipsumSentences } from '../src/mock-data/lipsum';

const meta: Meta<typeof PageIntroComponent> = {
  title: 'Layout/Page Intro',
  parameters: {
    purposeFunction: {
      function:
        'Tell users a bit about the area of the website that they are on with links to further information',
      purpose:
        'People might land on areas of the website they don’t know much about. The intro is a place they can get some contextual help, some introductory info and links to further help, information and downloads',
    },
  },
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
