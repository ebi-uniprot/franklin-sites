import { screen, fireEvent, render } from '@testing-library/react';

import renderWithRouter from '../../testHelpers/renderWithRouter';

import DecoratedListItem from '../decorated-list-item';

describe('DecoratedListItem component', () => {
  it('should render', () => {
    const { asFragment } = render(
      <DecoratedListItem title="Title">Content</DecoratedListItem>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render without title', () => {
    const { asFragment } = render(
      <DecoratedListItem>Content</DecoratedListItem>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render compact', () => {
    const { asFragment } = render(
      <DecoratedListItem title="Title" compact>
        Content
      </DecoratedListItem>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render compact without title', () => {
    const { asFragment } = render(
      <DecoratedListItem compact>Content</DecoratedListItem>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render inline', () => {
    const { asFragment } = render(
      <DecoratedListItem inline>Content</DecoratedListItem>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render link and navigate when clicked', () => {
    const { asFragment, history } = renderWithRouter(
      <DecoratedListItem to="/target">Content</DecoratedListItem>
    );
    expect(asFragment()).toMatchSnapshot();
    fireEvent.click(screen.getByTestId('background-link'));
    expect(history.location.pathname).toBe('/target');
  });
});
