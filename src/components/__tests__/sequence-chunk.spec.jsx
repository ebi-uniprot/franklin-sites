import React from 'react';
import { render } from '@testing-library/react';
import SequenceChunk from '../sequence-chunk';

describe('Sequence chunk component', () => {
  test('should render without highlights', () => {
    const { asFragment } = render(
      <SequenceChunk
        sequence="ABCDEFGHIJ"
        textSize={{ width: 10, height: 10 }}
        chunkSize={10}
        chunkNumber={2}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render with highlights', () => {
    const { asFragment } = render(
      <SequenceChunk
        sequence="ABCDEFGHIJ"
        textSize={{ width: 10, height: 10 }}
        highlights={[
          {
            aminoAcids: ['A', 'F', 'I'],
            colour: 'blue',
          },
        ]}
        chunkSize={10}
        chunkNumber={2}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
