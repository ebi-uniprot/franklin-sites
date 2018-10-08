import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../../src/components/header';

describe('Hader component', () => {
  test('should render', () => {
    const component = renderer.create(<Header />).toJSON();

    expect(component).toMatchSnapshot();
  });
});
