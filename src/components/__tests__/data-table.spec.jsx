import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DataTable from '../data-table';
import { fillArray } from '../../utils';

describe('DataTable', () => {
  const getIdKey = ({ id }) => id;
  const onSelect = jest.fn();
  const onHeaderClick = jest.fn();
  const selectable = true;
  const selected = ['id0'];
  const columns = [
    {
      label: 'Column 1',
      name: 'content1',
      render: (row) => row.content1,
      sortable: true,
      sorted: 'ascend',
    },
    {
      label: 'Column 2',
      name: 'content2',
      render: (row) => row.content2,
    },
    {
      label: 'Column 3',
      name: 'content3',
      render: (row) => row.content3,
      sortable: true,
    },
  ];
  const data = fillArray(10, (_, index) => ({
    id: `id${index}`,
    content1: 'foo',
    content2: 'bar',
    content3: 'baz',
  }));
  const scrollDataAttribute = 'data-table';

  let onLoadMoreItems;

  const getRender = (hasMoreData = true) =>
    render(
      <div
        style={{ height: '65vh', overflowY: 'auto' }}
        data-loader-scroll={scrollDataAttribute}
        data-testid="scroll-container"
      >
        <DataTable
          onLoadMoreItems={onLoadMoreItems}
          hasMoreData={hasMoreData}
          data={data}
          getIdKey={getIdKey}
          columns={columns}
          onSelect={onSelect}
          selected={selected}
          onHeaderClick={onHeaderClick}
          selectable={selectable}
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

  test('should not request more data when hasMoreData is false', () => {
    const { getByTestId } = getRender(false);
    const scrollContainer = getByTestId('scroll-container');
    fireEvent.scroll(scrollContainer, { target: { scrollY: 1000 } });
    expect(onLoadMoreItems).toHaveBeenCalledTimes(0);
  });

  test('should fire onSelect when checkbox is clicked', () => {
    const { container } = getRender();
    const checkbox = container.querySelector('tbody tr td input');
    fireEvent.click(checkbox);
    expect(onSelect).toHaveBeenCalled();
  });

  test('should fire onHeaderClick when header is clicked', () => {
    const { container } = getRender();
    const sortableHeader = container.querySelector(
      '.data-table__header-cell--ascend'
    );
    fireEvent.click(sortableHeader);
    expect(onHeaderClick).toHaveBeenCalled();
  });
});
