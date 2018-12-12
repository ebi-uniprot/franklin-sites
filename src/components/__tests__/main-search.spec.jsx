import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MainSearch from '../main-search';

Enzyme.configure({ adapter: new Adapter() });

describe('MainSearch component', () => {
  test('should submit the search term', () => {
    const handleSearchSubmit = jest.fn();
    const wrapper = mount(<MainSearch handleSearchSubmit={handleSearchSubmit} />);
    wrapper.find('[type="submit"]').simulate('submit');
    expect(handleSearchSubmit).toHaveBeenCalled();
  });

  test('should set searchTerm', () => {
    const handleSearchSubmit = jest.fn();
    const wrapper = shallow(
      <MainSearch searchTerm="blah" handleSearchSubmit={handleSearchSubmit} />,
    );
    expect(
      wrapper
        .find('[type="text"]')
        .first()
        .props().value,
    ).toBe('blah');
  });
});
