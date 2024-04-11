import { EllipsisReveal as EllipsisRevealComponent } from '../src/components';

import { getLipsumSentences } from '../src/mock-data/lipsum';

export default {
  title: 'Data/Ellipsis Reveal',
  decorators: [],
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
