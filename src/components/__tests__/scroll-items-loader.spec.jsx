import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ScrollItemsLoader from '../scroll-items-loader';
import { fillArray } from '../../utils';

describe('ScrollItemsLoader', () => {
  const idKey = 'uuid';
  const items = fillArray(10, (element, index) => <p key={index}>{index}</p>);

  let onLoadMoreItems;
  beforeEach(() => {
    onLoadMoreItems = jest.fn();
  });

  test('should render ScrollItemsLoader', () => {
    const { asFragment } = render(
      <ScrollItemsLoader
        idKey={idKey}
        onLoadMoreItems={onLoadMoreItems}
        hasMoreItems
        items={items}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should request more data', () => {
    const { container } = render(
      <ScrollItemsLoader
        idKey={idKey}
        onLoadMoreItems={onLoadMoreItems}
        hasMoreItems
        items={items}
      />,
    );
    const scrollContainer = container.firstChild;
    fireEvent.scroll(scrollContainer, { target: { scrollY: 100 } });
    expect(onLoadMoreItems).toHaveBeenCalled();
  });

  test('should not request more data', () => {
    const { container } = render(
      <ScrollItemsLoader
        idKey={idKey}
        onLoadMoreItems={onLoadMoreItems}
        hasMoreItems={false}
        items={items}
      />,
    );
    const scrollContainer = container.firstChild;
    fireEvent.scroll(scrollContainer, { target: { scrollY: 100 } });
    expect(onLoadMoreItems).toHaveBeenCalledTimes(0);
  });
});
