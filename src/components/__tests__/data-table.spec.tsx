import { render, fireEvent, screen } from '@testing-library/react';

import {
  DataTableWithLoader as DataTable,
  SortableColumn,
  NonSortableColumn,
} from '../data-table';

describe('DataTable', () => {
  const onSelectRow = jest.fn();
  const onHeaderClick = jest.fn();
  const selected = ['id0'];

  const data = Array.from({ length: 10 }, (_, index) => ({
    id: `id${index}`,
    content1: 'foo',
    content2: 'bar',
    content3: 'baz',
  }));

  type DataType = typeof data[0];
  const columns: Array<
    SortableColumn<DataType> | NonSortableColumn<DataType>
  > = [
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
      label: () => <h1>Column 3</h1>,
      name: 'content3',
      render: (row) => row.content3,
      sortable: true,
    },
  ];

  let onLoadMoreItems: () => void;

  const renderTable = ({ hasMoreData = true, clickToLoad = true } = {}) =>
    render(
      <DataTable
        onLoadMoreItems={onLoadMoreItems}
        getIdKey={(datum) => datum.id}
        hasMoreData={hasMoreData}
        data={data}
        clickToLoad={clickToLoad}
        columns={columns}
        onSelectRow={onSelectRow}
        selected={selected}
        onHeaderClick={onHeaderClick}
      />
    );

  beforeEach(() => {
    onLoadMoreItems = jest.fn();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.IntersectionObserver = jest.fn(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
    }));
  });

  afterAll(() => {
    jest.clearAllMocks();
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
    expect(onSelectRow).not.toHaveBeenCalled();
    const checkbox = screen.getAllByRole('checkbox');
    fireEvent.click(checkbox[0]);
    expect(onSelectRow).toHaveBeenCalled();
  });

  test('should fire onHeaderClick when header is clicked', () => {
    renderTable();
    expect(onHeaderClick).not.toHaveBeenCalled();
    const header = screen.getByText(/Column 1/);
    fireEvent.click(header);
    expect(onHeaderClick).toHaveBeenCalled();
  });

  test('should show click-to-load if no IntersectionObserver support', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    delete window.IntersectionObserver;
    renderTable({ clickToLoad: false });
    expect(screen.getByTestId('click-to-load-more')).toBeTruthy();
  });
});
