import React from 'react';
import renderer from 'react-test-renderer';

import Tile from '../tile';

describe('Tile component', () => {
  test('should render', () => {
    const component = renderer.create(<Tile title="Tile title" namespace="uniref" />).toJSON();

    expect(component).toMatchSnapshot();
  });
});
