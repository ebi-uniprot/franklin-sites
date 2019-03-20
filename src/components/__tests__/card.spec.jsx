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

  test('should render card with subtitle', () => {
    const component = renderer
      .create(
        <Card title="Title" subtitle="Subtitle">
          <span>Some content</span>
        </Card>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  test('should render card with links', () => {
    const links = [
      {
        name: 'link',
        link: 'example.com',
        color: 'red',
      },
    ];

    const component = renderer
      .create(
        <Card title="Title" subtitle="Subtitle" links={links}>
          <span>Some content</span>
        </Card>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
