import React from 'react';
import renderer from 'react-test-renderer';

import DecoratedListItem from '../decorated-list-item';

describe('DecoratedListItem component', () => {
  test('should render', () => {
    const component = renderer
      .create(<DecoratedListItem title="Title">Content</DecoratedListItem>)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  test('should render without title', () => {
    const component = renderer
      .create(<DecoratedListItem>Content</DecoratedListItem>)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  test('should render compact', () => {
    const component = renderer
      .create(
        <DecoratedListItem title="Title" compact>
          Content
        </DecoratedListItem>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  test('should render compact without title', () => {
    const component = renderer
      .create(<DecoratedListItem compact>Content</DecoratedListItem>)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  test('should render inline', () => {
    const component = renderer
      .create(<DecoratedListItem inline>Content</DecoratedListItem>)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
