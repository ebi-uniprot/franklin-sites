import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DataTable from '../data-table';
import { fillArray } from '../../utils';

describe('DataTable', () => {
  const idKey = 'id';
  const onSelect = jest.fn();
  const onHeaderClick = jest.fn();
  const selectable = true;
  const selected = {};
  const hasMoreData = true;
  const columns = [
    {
      label: 'Column 1',
      name: 'content1',
      render: row => row.content1,
      sortable: true,
      sorted: 'ascend',
    },
    {
      label: 'Column 2',
      name: 'content2',
      render: row => row.content2,
    },
    {
      label: 'Column 3',
      name: 'content3',
      render: row => row.content3,
      sortable: true,
    },
  ];
  const data = fillArray(10, (element, index) => ({
    [idKey]: `id-${index}`,
    content1: 'foo',
    content2: 'bar',
    content3: 'baz',
  }));

  let onLoadMoreItems;
  let props;
  beforeEach(() => {
    onLoadMoreItems = jest.fn();
    props = {
      onLoadMoreItems,
      hasMoreData,
      data,
      idKey,
      columns,
      onSelect,
      selected,
      onHeaderClick,
      selectable,
    };
  });

  test('should render', () => {
    const { asFragment } = render(<DataTable {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should request more data', () => {
    const { container } = render(<DataTable {...props} />);
    const scrollContainer = container.firstChild;
    fireEvent.scroll(scrollContainer, { target: { scrollY: 1000 } });
    expect(onLoadMoreItems).toHaveBeenCalled();
  });

  test('should not request more data when hasMoreData is false', () => {
    const { container } = render(<DataTable {...props} hasMoreData={false} />);
    const scrollContainer = container.firstChild;
    fireEvent.scroll(scrollContainer, { target: { scrollY: 1000 } });
    expect(onLoadMoreItems).toHaveBeenCalledTimes(0);
  });

  test('should fire onSelect when checkbox is clicked', () => {
    const { container } = render(<DataTable {...props} />);
    const checkbox = container.querySelector('tbody tr td input');
    fireEvent.click(checkbox);
    expect(onSelect).toHaveBeenCalled();
  });

  test('should fire onHeaderClick when header is clicked', () => {
    const { container } = render(<DataTable {...props} />);
    const sortableHeader = container.querySelector('.data-table__table__header__row__cell--ascend');
    fireEvent.click(sortableHeader);
    expect(onHeaderClick).toHaveBeenCalled();
  });
});
