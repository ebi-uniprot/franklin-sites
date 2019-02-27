import React from 'react';
import renderer from 'react-test-renderer';

import InfoList from '../info-list';

describe('InfoList component', () => {
  test('should render', () => {
    const infoData = [
      {
        title: 'Item 1',
        content: <div>Some content</div>,
      },
      {
        title: 'Another item',
        content: <div>Some more content</div>,
      },
    ];
    const component = renderer.create(<InfoList infoData={infoData} />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
