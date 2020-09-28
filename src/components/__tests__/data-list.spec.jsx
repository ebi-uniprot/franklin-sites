import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DataList from '../data-list';
import { fillArray } from '../../utils';

describe('DataList', () => {
  const data = fillArray(10, (_, index) => ({
    id: `id${index}`,
    content: index,
  }));

  let onLoadMoreItems;
  const scrollDataAttribute = 'data-list';
  const getRender = (hasMoreData = true) =>
    render(
      <div
        style={{ height: '65vh', overflowY: 'auto' }}
        data-loader-scroll={scrollDataAttribute}
        data-testid="scroll-container"
      >
        <DataList
          onLoadMoreItems={onLoadMoreItems}
          hasMoreData={hasMoreData}
          data={data}
          dataRenderer={(item) => <p>{item.content}</p>}
          onCardClick={null}
          scrollDataAttribute={scrollDataAttribute}
        />
      </div>
    );
  beforeEach(() => {
    onLoadMoreItems = jest.fn();
  });

  test('should render', () => {
    const { asFragment } = getRender();
    expect(asFragment()).toMatchSnapshot();
  });

  test('should request more data', () => {
    const { getByTestId } = getRender();
    const scrollContainer = getByTestId('scroll-container');
    fireEvent.scroll(scrollContainer, { target: { scrollY: 1000 } });
    expect(onLoadMoreItems).toHaveBeenCalled();
  });

  test('should not request more data', () => {
    const { getByTestId } = getRender(false);
    const scrollContainer = getByTestId('scroll-container');
    fireEvent.scroll(scrollContainer, { target: { scrollY: 1000 } });
    expect(onLoadMoreItems).toHaveBeenCalledTimes(0);
  });
});
