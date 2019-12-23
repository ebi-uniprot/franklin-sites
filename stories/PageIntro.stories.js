import React from 'react';
import PageIntro from '../src/components/page-intro';
import { getLipsumSentences } from '../src/app/common/lipsum';

export default {
  title: 'Data view/Page Intro',
  parameters: {
    purposeFunction: {
      function:
        'Tell users a bit about the area of the website that they are on with links to further information',
      purpose:
        'People might land on areas of the website they don’t know much about. The intro is a place they can get some contextual help, some introductory info and links to further help, information and downloads',
    },
  },
};

export const pageIntro = () => (
  <PageIntro title="UniProt" resultsCount={1000}>
    {getLipsumSentences()}
  </PageIntro>
);
