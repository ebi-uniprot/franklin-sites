import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ScrollDataLoader from '../scroll-data-loader';
import { fillArray } from '../../utils';

describe('ScrollDataLoader', () => {
  const idKey = 'uuid';
  const items = fillArray(10, (element, index) => <p key={index}>{index}</p>);

  let onLoadMoreData;
  beforeEach(() => {
    onLoadMoreData = jest.fn();
  });

  test('should render ScrollDataLoader', () => {
    const { asFragment } = render(
      <ScrollDataLoader idKey={idKey} onLoadMoreData={onLoadMoreData} hasMoreData items={items} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should request more data', () => {
    const { container } = render(
      <ScrollDataLoader idKey={idKey} onLoadMoreData={onLoadMoreData} hasMoreData items={items} />,
    );
    const scrollContainer = container.firstChild;
    fireEvent.scroll(scrollContainer, { target: { scrollY: 100 } });
    expect(onLoadMoreData).toHaveBeenCalled();
  });

  test('should not request more data', () => {
    const { container } = render(
      <ScrollDataLoader
        idKey={idKey}
        onLoadMoreData={onLoadMoreData}
        hasMoreData={false}
        items={items}
      />,
    );
    const scrollContainer = container.firstChild;
    fireEvent.scroll(scrollContainer, { target: { scrollY: 100 } });
    expect(onLoadMoreData).toHaveBeenCalledTimes(0);
  });
});
