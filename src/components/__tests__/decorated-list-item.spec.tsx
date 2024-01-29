import { screen, fireEvent, render } from '@testing-library/react';

import renderWithBrowserRouter from '../../testHelpers/renderWithBrowserRouter';
import renderWithMemoryRouter from '../../testHelpers/renderWithMemoryRouter';

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

  it('should render link', () => {
    const { asFragment } = renderWithBrowserRouter(
      <DecoratedListItem to="/target">Content</DecoratedListItem>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render link and navigate when clicked', () => {
    renderWithMemoryRouter(
      <DecoratedListItem to="/target">Content</DecoratedListItem>
    );
    fireEvent.click(screen.getByTestId('background-link'));
    // verify location display is rendered
    expect(screen.getByTestId('location-display')).toHaveTextContent('/target');
  });
});
