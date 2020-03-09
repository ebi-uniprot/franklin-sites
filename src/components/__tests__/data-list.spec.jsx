import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DataList from '../data-list';
import { fillArray } from '../../utils';

describe('DataList', () => {
  const data = fillArray(10, (element, index) => ({
    id: `id${index}`,
    content: index,
  }));

  let onLoadMoreItems;
  let dataRenderer;
  beforeEach(() => {
    onLoadMoreItems = jest.fn();
    dataRenderer = item => <p>{item.content}</p>;
  });

  test('should render', () => {
    const { asFragment } = render(
      <DataList
        onLoadMoreItems={onLoadMoreItems}
        hasMoreData
        data={data}
        dataRenderer={dataRenderer}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should request more data', () => {
    const { container } = render(
      <DataList
        onLoadMoreItems={onLoadMoreItems}
        hasMoreData
        data={data}
        dataRenderer={dataRenderer}
        onCardClick={null}
      />
    );
    const scrollContainer = container.querySelector(
      '.data-loader__scroll-container'
    );
    fireEvent.scroll(scrollContainer, { target: { scrollY: 1000 } });
    expect(onLoadMoreItems).toHaveBeenCalled();
  });

  test('should not request more data', () => {
    const { container } = render(
      <DataList
        onLoadMoreItems={onLoadMoreItems}
        hasMoreData={false}
        data={data}
        dataRenderer={dataRenderer}
        onCardClick={null}
      />
    );
    const scrollContainer = container.querySelector(
      '.data-loader__scroll-container'
    );
    fireEvent.scroll(scrollContainer, { target: { scrollY: 1000 } });
    expect(onLoadMoreItems).toHaveBeenCalledTimes(0);
  });
});
