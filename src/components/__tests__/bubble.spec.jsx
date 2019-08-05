import React from 'react';
import renderer from 'react-test-renderer';
import Bubble from '../bubble';

describe('Long number component', () => {
  test('should render with defaults', () => {
    const component = renderer.create(<Bubble value={10} />).toJSON();
    expect(component).toMatchSnapshot();
  });
  test('should render bigger than 100', () => {
    const component = renderer.create(<Bubble value={101} />).toJSON();
    expect(component).toMatchSnapshot();
  });
  test('should render different size and colour', () => {
    const component = renderer
      .create(<Bubble value={101} colourClass="colour-light-grey" size="large" />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
