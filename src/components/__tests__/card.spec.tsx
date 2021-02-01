import { screen, fireEvent } from '@testing-library/react';

import Card from '../card';

import renderWithRouter from '../../testHelpers/renderWithRouter';

describe('Card component', () => {
  test('should render', () => {
    const { asFragment } = renderWithRouter(
      <Card title="Title">
        <span>Some content</span>
      </Card>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render card with subtitle', () => {
    const { asFragment } = renderWithRouter(
      <Card title="Title" subtitle="Subtitle">
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
      <Card title="Title" subtitle="Subtitle" links={links}>
        <span>Some content</span>
      </Card>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render card with onclick', () => {
    const onClickMock = jest.fn();
    const { asFragment } = renderWithRouter(
      <Card title="Title" subtitle="Subtitle" onClick={onClickMock}>
        <span>Some content</span>
      </Card>
    );
    fireEvent.click(screen.getByRole('button'));
    expect(onClickMock).toHaveBeenCalled();
    expect(asFragment()).toMatchSnapshot();
  });
});
