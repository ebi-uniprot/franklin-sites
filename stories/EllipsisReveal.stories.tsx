import { EllipsisReveal as EllipsisRevealComponent } from '../src/components';

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

export const EllipsisReveal = () => (
  <>
    Some text{' '}
    <EllipsisRevealComponent>{getLipsumSentences()}</EllipsisRevealComponent>
  </>
);

export const EllipsisRevealInGroup = () => (
  <EllipsisRevealComponent.Provider>
    <p>
      Some text{' '}
      <EllipsisRevealComponent contextKey="group">
        {getLipsumSentences()}
      </EllipsisRevealComponent>
    </p>
    <p>
      Some other text{' '}
      <EllipsisRevealComponent contextKey="group">
        {getLipsumSentences()}
      </EllipsisRevealComponent>
    </p>
    <p>
      Some other text again{' '}
      <EllipsisRevealComponent contextKey="group">
        {getLipsumSentences()}
      </EllipsisRevealComponent>
    </p>
  </EllipsisRevealComponent.Provider>
);
