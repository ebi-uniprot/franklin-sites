import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sequenceData from '../../app/common/sequence-data';

import Sequence from '../sequence';

configure({ adapter: new Adapter() });

describe('Sequence component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Sequence
        sequence={sequenceData}
        textSize={{ width: 10, height: 10 }}
        isoformId="isoformId-1"
      />,
    );
  });

  test('should render', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  test('should toggle highlight on', () => {
    const highlight = { name: 'Test', aminoAcids: ['A', 'B', 'C'] };
    wrapper.instance().handleToggleHighlight(highlight);
    expect(wrapper.state().highlights).toEqual([highlight]);
  });

  test('should toggle highlight off', () => {
    const highlight = { name: 'Test', aminoAcids: ['A', 'B', 'C'] };
    wrapper.instance().handleToggleHighlight(highlight);
    wrapper.instance().handleToggleHighlight(highlight);
    expect(wrapper.state().highlights).toEqual([]);
  });

  test('simulate highlight click', () => {
    const handleToggleHighlight = jest.fn();
    wrapper.instance().handleToggleHighlight = handleToggleHighlight;
    wrapper.find('#isoformId-1-Polar').simulate('change');
    expect(handleToggleHighlight).toBeCalled();
  });
});
