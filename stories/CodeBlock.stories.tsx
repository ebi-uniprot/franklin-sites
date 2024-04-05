import { Meta, StoryObj } from '@storybook/react';
import { LoremIpsum } from 'lorem-ipsum';

import { CodeBlock as CodeBlockComponent } from '../src/components';

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

const meta: Meta<typeof CodeBlockComponent> = {
  component: CodeBlockComponent,
  title: 'Layout/CodeBlock',
  parameters: {
    purposeFunction: {
      function: 'Display of preformatted text/code',
      purpose: 'Provide pre-styled code blocks',
    },
  },
  args: { lightMode: false },
  render: ({ lightMode }) => (
    <CodeBlockComponent lightMode={lightMode}>{li}</CodeBlockComponent>
  ),
};
export default meta;

type Story = StoryObj<typeof CodeBlockComponent>;

export const CodeBlock: Story = {};
