import React from 'react';
import Card from '../card';
import renderWithRouter from '../../testHelpers/renderWithRouter';

describe('Card component', () => {
  test('should render', () => {
    const { asFragment } = renderWithRouter(
      <Card title="Title" onClick={null}>
        <span>Some content</span>
      </Card>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render card with subtitle', () => {
    const { asFragment } = renderWithRouter(
      <Card title="Title" subtitle="Subtitle" onClick={null}>
        <span>Some content</span>
      </Card>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render card with links', () => {
    const links = [
      {
        name: 'link',
        link: 'example.com',
        color: 'red',
      },
    ];

    const { asFragment } = renderWithRouter(
      <Card title="Title" subtitle="Subtitle" links={links} onClick={null}>
        <span>Some content</span>
      </Card>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render card with onclick', () => {
    const { asFragment } = renderWithRouter(
      <Card title="Title" subtitle="Subtitle" onClick={() => {}}>
        <span>Some content</span>
      </Card>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
