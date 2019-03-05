import React from 'react';
import renderer from 'react-test-renderer';
import sequenceData from '../../app/common/sequence-data';

import Sequence from '../sequence';

describe('Sequence component', () => {
  test('should render', () => {
    const component = renderer.create(<Sequence sequence={sequenceData} />).toJSON();

    expect(component).toMatchSnapshot();
  });
});
