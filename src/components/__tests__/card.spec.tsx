import { screen, fireEvent } from '@testing-library/react';

import Card from '../card';

import renderWithRouter from '../../testHelpers/renderWithRouter';

describe('Card component', () => {
  test('should render', () => {
    const { asFragment } = renderWithRouter(
      <Card header={<h2>Title</h2>}>
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
      <Card header={<h2>Title</h2>} links={links}>
        <span>Some content</span>
      </Card>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render card with target', () => {
    const { asFragment, history } = renderWithRouter(
      <Card header={<h2>Title</h2>} to="/target">
        <span>Some content</span>
      </Card>
    );
    expect(asFragment()).toMatchSnapshot();
    fireEvent.click(screen.getByTestId('background-link'));
    expect(history.location.pathname).toBe('/target');
  });
});
