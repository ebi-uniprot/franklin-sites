import { render, fireEvent, screen } from '@testing-library/react';

import { DataTableWithLoader as DataTable } from '../data-table';

describe('DataTable', () => {
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
  const data = Array.from({ length: 10 }, (_, index) => ({
    id: `id${index}`,
    content1: 'foo',
    content2: 'bar',
    content3: 'baz',
  }));

  let onLoadMoreItems;

  const renderTable = ({ hasMoreData = true, clickToLoad = true } = {}) =>
    render(
      <DataTable
        onLoadMoreItems={onLoadMoreItems}
        hasMoreData={hasMoreData}
        data={data}
        clickToLoad={clickToLoad}
        columns={columns}
        onSelect={onSelect}
        selected={selected}
        onHeaderClick={onHeaderClick}
        selectable={selectable}
      />
    );

  beforeEach(() => {
    onLoadMoreItems = jest.fn();
  });

  test('should render autoload', () => {
    const { asFragment } = renderTable({ clickToLoad: false });
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render click-to-load', () => {
    const { asFragment } = renderTable();
    expect(asFragment()).toMatchSnapshot();
  });

  test('should request more data', () => {
    renderTable();
    expect(onLoadMoreItems).not.toHaveBeenCalled();
    const clickToLoadMore = screen.getByTestId('click-to-load-more');
    fireEvent.click(clickToLoadMore);
    expect(onLoadMoreItems).toHaveBeenCalled();
  });

  test('should not show the option to load more data', () => {
    renderTable({ hasMoreData: false });
    const clickToLoadMore = screen.queryByTestId('click-to-load-more');
    expect(clickToLoadMore).toBeNull();
  });

  test('should fire onSelect when checkbox is clicked', () => {
    renderTable();
    expect(onSelect).not.toHaveBeenCalled();
    const checkbox = screen.getAllByRole('checkbox');
    fireEvent.click(checkbox[0]);
    expect(onSelect).toHaveBeenCalled();
  });

  test('should fire onHeaderClick when header is clicked', () => {
    renderTable();
    expect(onHeaderClick).not.toHaveBeenCalled();
    const header = screen.getByText(/Column 1/);
    fireEvent.click(header);
    expect(onHeaderClick).toHaveBeenCalled();
  });
});
