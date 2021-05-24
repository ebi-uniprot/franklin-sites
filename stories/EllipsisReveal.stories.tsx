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

export const expandableList = () => (
  <>
    Some text <EllipsisReveal>{getLipsumSentences()}</EllipsisReveal>
  </>
);
