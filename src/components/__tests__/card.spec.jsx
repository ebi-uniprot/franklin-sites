import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import Card from '../card';

describe('Card component', () => {
  test('should render', () => {
    const component = renderer
      .create(
        <Router>
          <Card title="Title" onClick={null}>
            <span>Some content</span>
          </Card>
        </Router>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  test('should render card with subtitle', () => {
    const component = renderer
      .create(
        <Router>
          <Card title="Title" subtitle="Subtitle" onClick={null}>
            <span>Some content</span>
          </Card>
        </Router>,
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
        <Router>
          <Card title="Title" subtitle="Subtitle" links={links} onClick={null}>
            <span>Some content</span>
          </Card>
        </Router>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
