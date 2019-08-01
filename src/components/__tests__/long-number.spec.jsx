import React from 'react';
import renderer from 'react-test-renderer';
import LongNumber from '../long-number';

describe('Long number component', () => {
  test('should render', () => {
    const component = renderer.create(<LongNumber>{1000000}</LongNumber>).toJSON();
    expect(component).toMatchSnapshot();
  });
});
