import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SequenceChunk from '../sequence-chunk';

configure({ adapter: new Adapter() });

describe('Sequence chunk component', () => {
  test('should render without highlights', () => {
    const textSize = { width: 10, height: 10 };
    const wrapper = shallow(
      <SequenceChunk sequence="ABCDEFGHIJ" textSize={textSize} chunkSize={10} chunkNumber={2} />,
    );
    expect(wrapper.debug()).toMatchSnapshot();
  });

  test('should render with highlights', () => {
    const wrapper = shallow(
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
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
