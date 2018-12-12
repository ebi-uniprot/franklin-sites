import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../header';

describe('Header component', () => {
  test('should render', () => {
    const component = renderer
      .create(
        <Header>
          <span>Hello</span>
        </Header>,
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
