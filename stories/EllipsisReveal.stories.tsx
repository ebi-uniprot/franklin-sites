import EllipsisReveal from '../src/components/ellipsis-reveal';

import { getLipsumSentences } from '../src/mock-data/lipsum';

export default {
  title: 'Data/Ellipsis Reveal',
  decorators: [],
  parameters: {
    purposeFunction: {
      purpose:
        'Make the display more compact by not displaying all information by default.',
      function:
        'Display additional text as part of an already existing block of text.',
    },
  },
};

export const ellipsisReveal = () => (
  <>
    Some text <EllipsisReveal>{getLipsumSentences()}</EllipsisReveal>
  </>
);

export const ellipsisRevealInGroup = () => (
  <EllipsisReveal.Provider>
    <p>
      Some text{' '}
      <EllipsisReveal contextKey="group">{getLipsumSentences()}</EllipsisReveal>
    </p>
    <p>
      Some other text{' '}
      <EllipsisReveal contextKey="group">{getLipsumSentences()}</EllipsisReveal>
    </p>
    <p>
      Some other text again{' '}
      <EllipsisReveal contextKey="group">{getLipsumSentences()}</EllipsisReveal>
    </p>
  </EllipsisReveal.Provider>
);
