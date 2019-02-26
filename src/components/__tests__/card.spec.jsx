import React from 'react';
import renderer from 'react-test-renderer';

import Card from '../card';

describe('Card component', () => {
  test('should render', () => {
    const component = renderer
      .create(
        <Card title="Title">
          <span>Some content</span>
        </Card>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
