import { text, withKnobs } from '@storybook/addon-knobs';

import { PageIntro as PageIntroComponent } from '../src/components';
import { getLipsumSentences } from '../src/mock-data/lipsum';

export default {
  title: 'Layout/Page Intro',
  decorators: [withKnobs],
  parameters: {
    purposeFunction: {
      function:
        'Tell users a bit about the area of the website that they are on with links to further information',
      purpose:
        'People might land on areas of the website they don’t know much about. The intro is a place they can get some contextual help, some introductory info and links to further help, information and downloads',
    },
  },
};

export const PageIntro = () => (
  <PageIntroComponent
    title="UniProt"
    resultsCount={1000}
    titlePostscript={text('Title Postcript', '', 'Props')}
  >
    {getLipsumSentences()}
  </PageIntroComponent>
);
