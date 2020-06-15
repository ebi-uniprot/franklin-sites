import React from 'react';
import { LoremIpsum } from 'lorem-ipsum';

import { CodeBlock } from '../src/components';

export default {
  title: 'Layout|CodeBlock',
  parameters: {
    purposeFunction: {
      function: 'Display of preformatted text/code',
      purpose: 'Provide pre-styled code blocks',
    },
  },
};

const li = new LoremIpsum({
  sentencesPerParagraph: {
    max: 1,
    min: 1,
  },
  wordsPerSentence: {
    max: 12,
    min: 8,
  },
}).generateParagraphs(10);

export const darkMode = () => <CodeBlock>{li}</CodeBlock>;

export const lightMode = () => <CodeBlock lightMode>{li}</CodeBlock>;
