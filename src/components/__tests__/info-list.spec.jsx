import React from 'react';
import { render } from '@testing-library/react';

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
    const { asFragment } = render(<InfoList infoData={infoData} />);
    expect(asFragment()).toMatchSnapshot();
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
    const { asFragment } = render(<InfoList infoData={infoData} isCompact />);
    expect(asFragment()).toMatchSnapshot();
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
    const { asFragment } = render(<InfoList infoData={infoData} noTitles />);
    expect(asFragment()).toMatchSnapshot();
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
    const { asFragment } = render(<InfoList infoData={infoData} columns />);
    expect(asFragment()).toMatchSnapshot();
  });
});
