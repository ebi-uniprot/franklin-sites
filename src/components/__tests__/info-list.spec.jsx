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
    const component = renderer
      .create(<InfoList infoData={infoData} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  test('should render compact', () => {
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
    const component = renderer
      .create(<InfoList infoData={infoData} isCompact />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  test('should render without titles', () => {
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
    const component = renderer
      .create(<InfoList infoData={infoData} noTitles />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  test('should render without in 2 columns', () => {
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
    const component = renderer
      .create(<InfoList infoData={infoData} columns />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
