import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DataList from '../data-list';
import { fillArray } from '../../utils';

describe('DataList', () => {
  const items = fillArray(10, (element, index) => <p key={index}>{index}</p>);

  let onLoadMoreItems;
  beforeEach(() => {
    onLoadMoreItems = jest.fn();
  });

  test('should render', () => {
    const { asFragment } = render(
      <DataList onLoadMoreItems={onLoadMoreItems} hasMoreData items={items} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should request more data', () => {
    const { container } = render(
      <DataList onLoadMoreItems={onLoadMoreItems} hasMoreData items={items} />,
    );
    const scrollContainer = container.firstChild.firstChild;
    fireEvent.scroll(scrollContainer, { target: { scrollY: 1000 } });
    expect(onLoadMoreItems).toHaveBeenCalled();
  });

  test('should not request more data', () => {
    const { container } = render(
      <DataList onLoadMoreItems={onLoadMoreItems} hasMoreData={false} items={items} />,
    );
    const scrollContainer = container.firstChild.firstChild;
    fireEvent.scroll(scrollContainer, { target: { scrollY: 1000 } });
    expect(onLoadMoreItems).toHaveBeenCalledTimes(0);
  });
});
