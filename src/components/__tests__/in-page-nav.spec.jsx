import React from 'react';
import renderer from 'react-test-renderer';

import InPageNav from '../in-page-nav';

describe('InPageNav component', () => {
  test('should render', () => {
    const sections = [
      {
        id: 'id1',
        label: 'First link',
      },
      {
        id: 'id2',
        label: 'Second link',
      },
      {
        id: 'id3',
        label: 'Third link',
        disabled: true,
      },
    ];
    const component = renderer.create(<InPageNav sections={sections} />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
