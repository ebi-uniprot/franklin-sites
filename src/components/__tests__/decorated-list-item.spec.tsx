import { render } from '@testing-library/react';

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
    const { asFragment } = render(
      // eslint-disable-next-line jsx-a11y/control-has-associated-label, jsx-a11y/anchor-has-content
      <DecoratedListItem link={<a href="/target" />}>Content</DecoratedListItem>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
