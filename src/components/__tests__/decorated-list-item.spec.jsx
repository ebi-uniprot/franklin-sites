import { render } from '@testing-library/react';

import DecoratedListItem from '../decorated-list-item';

describe('DecoratedListItem component', () => {
  test('should render', () => {
    const { asFragment } = render(
      <DecoratedListItem title="Title">Content</DecoratedListItem>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render without title', () => {
    const { asFragment } = render(
      <DecoratedListItem>Content</DecoratedListItem>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render compact', () => {
    const { asFragment } = render(
      <DecoratedListItem title="Title" compact>
        Content
      </DecoratedListItem>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render compact without title', () => {
    const { asFragment } = render(
      <DecoratedListItem compact>Content</DecoratedListItem>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render inline', () => {
    const { asFragment } = render(
      <DecoratedListItem inline>Content</DecoratedListItem>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
