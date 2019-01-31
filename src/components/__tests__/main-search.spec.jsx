import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MainSearch from '../main-search';

Enzyme.configure({ adapter: new Adapter() });

describe('MainSearch component', () => {
  const handleSubmit = jest.fn();
  const handleChange = jest.fn();

  test('should submit the search term', () => {
    const wrapper = mount(<MainSearch onChange={handleChange} onSubmit={handleSubmit} />);
    wrapper.find('[type="submit"]').simulate('submit');
    expect(handleSubmit).toHaveBeenCalled();
  });

  test('should detect the search term', () => {
    const wrapper = mount(<MainSearch onChange={handleChange} onSubmit={handleSubmit} />);
    wrapper
      .find('[type="text"]')
      .first()
      .simulate('change', { target: { value: 'foo' } });
    expect(handleChange).toHaveBeenCalledWith('foo');
  });

  test('should set searchTerm', () => {
    const wrapper = shallow(
      <MainSearch searchTerm="blah" onChange={handleChange} onSubmit={handleSubmit} />,
    );
    expect(
      wrapper
        .find('[type="text"]')
        .first()
        .props().value,
    ).toBe('blah');
  });
});
