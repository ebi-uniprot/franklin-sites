import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sequenceData from '../../app/common/sequence-data';

import Sequence from '../sequence';

configure({ adapter: new Adapter() });

describe('Sequence component', () => {
  test('should render', () => {
    const wrapper = shallow(
      <Sequence sequence={sequenceData} textSize={{ width: 10, height: 10 }} />,
    );
    expect(wrapper.debug()).toMatchSnapshot();
  });

  test('should toggle highlight on', () => {
    const highlight = { name: 'Test', aminoAcids: ['A', 'B', 'C'] };
    const wrapper = shallow(
      <Sequence sequence={sequenceData} textSize={{ width: 10, height: 10 }} />,
    );
    wrapper.instance().handleToggleHighlight(highlight);
    expect(wrapper.state().highlights).toEqual([highlight]);
  });

  test('should toggle highlight off', () => {
    const highlight = { name: 'Test', aminoAcids: ['A', 'B', 'C'] };
    const wrapper = shallow(
      <Sequence sequence={sequenceData} textSize={{ width: 10, height: 10 }} />,
    );
    wrapper.instance().handleToggleHighlight(highlight);
    wrapper.instance().handleToggleHighlight(highlight);
    expect(wrapper.state().highlights).toEqual([]);
  });

  test('simulate highlight click', () => {
    const handleToggleHighlight = jest.fn();
    const wrapper = shallow(
      <Sequence sequence={sequenceData} textSize={{ width: 10, height: 10 }} />,
    );
    wrapper.instance().handleToggleHighlight = handleToggleHighlight;
    wrapper.find('#Polar').simulate('click');
    expect(handleToggleHighlight).toBeCalled();
  });
});
