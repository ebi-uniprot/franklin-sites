import { boolean } from '@storybook/addon-knobs';
import { LoremIpsum } from 'lorem-ipsum';

import { CodeBlock as CodeBlockComponent } from '../src/components';

export default {
  title: 'Layout/CodeBlock',
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

export const CodeBlock = () => (
  <CodeBlockComponent lightMode={boolean('lightMode', false)}>
    {li}
  </CodeBlockComponent>
);
