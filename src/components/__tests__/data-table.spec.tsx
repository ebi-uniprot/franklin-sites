import {
  render,
  fireEvent,
  screen,
  getAllByRole,
  ByRoleOptions,
  waitFor,
} from '@testing-library/react';

import {
  DataTableWithLoader as DataTable,
  SortableColumn,
  NonSortableColumn,
} from '../data-table';

jest.mock('uuid', () => ({
  v1: jest.fn(() => 'abcd'),
}));

describe('DataTable', () => {
  const onSelectionChange = jest.fn();
  const onHeaderClick = jest.fn();

  const data = Array.from({ length: 10 }, (_, index) => ({
    id: `id${index}`,
    content1: 'foo',
    content2: 'bar',
    content3: 'baz',
  }));

  type DataType = typeof data[0];
  const columns: Array<SortableColumn<DataType> | NonSortableColumn<DataType>> =
    [
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
        label: <h1>Column 3</h1>,
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
        onSelectionChange={onSelectionChange}
        onHeaderClick={onHeaderClick}
      />
    );

  const getBodyCheckboxes = (options?: ByRoleOptions) => {
    const table = screen.getByRole('table');
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const body = table.querySelector('tbody')!;
    return getAllByRole(body, 'checkbox', options);
  };

  beforeEach(() => {
    onLoadMoreItems = jest.fn();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.IntersectionObserver = jest.fn(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
    }));
  });

  afterEach(() => {
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

  test('should fire onSelectionChange when a checkbox is clicked', () => {
    renderTable();
    expect(onSelectionChange).not.toHaveBeenCalled();
    const checkboxes = getBodyCheckboxes();
    fireEvent.click(checkboxes[0]);
    expect(getBodyCheckboxes({ checked: true })).toHaveLength(1);
    expect(onSelectionChange).toHaveBeenCalled();
  });

  test('should select all checkboxes when last checkbox is clicked with shift key', async () => {
    renderTable();
    const checkboxes = getBodyCheckboxes();
    fireEvent.click(checkboxes[data.length - 1], { shiftKey: true }); // last
    await waitFor(() =>
      expect(getBodyCheckboxes({ checked: true })).toHaveLength(data.length)
    );
    expect(onSelectionChange).toHaveBeenCalledTimes(data.length);
  });

  // Can't test this as we can't generate trusted events in tests
  test.skip('should select all in-between checkboxes when 2nd checkbox check is with shift key', () => {
    renderTable();
    expect(onSelectionChange).not.toHaveBeenCalled();
    const checkboxes = getBodyCheckboxes();
    fireEvent.click(checkboxes[data.length - 1], { isTrusted: true }); // last checkbox, first selection
    fireEvent.click(checkboxes[data.length - 3], { shiftKey: true }); // 3rd last
    expect(getBodyCheckboxes({ checked: true })).toHaveLength(3);
  });

  test('should select and unselect all checkboxes when select all checkbox is ticked', async () => {
    renderTable();
    const selectAll = screen.getByRole('checkbox', {
      name: /Selection control/i,
    }) as HTMLInputElement;
    fireEvent.click(selectAll); // check everything
    await waitFor(() =>
      expect(getBodyCheckboxes({ checked: true })).toHaveLength(data.length)
    );
    expect(onSelectionChange).toHaveBeenCalledTimes(data.length);
    expect(selectAll.indeterminate).toBe(false); // not in a mixed state

    await waitFor(() => {
      expect(selectAll.disabled).toBe(false);
    });

    fireEvent.click(selectAll); // uncheck everything
    // No checked checkboxes to find, helper function should throw
    await waitFor(() =>
      expect(() => getBodyCheckboxes({ checked: true })).toThrow()
    );
    expect(onSelectionChange).toHaveBeenCalledTimes(2 * data.length);
    expect(selectAll.indeterminate).toBe(false); // not in a mixed state
  });

  test('select all should get in a mixed state if one checkbox is selected, then unselect everything when clicked', async () => {
    renderTable();
    const selectAll = screen.getByRole('checkbox', {
      name: /Selection control/i,
    }) as HTMLInputElement;
    expect(selectAll.indeterminate).toBe(false);
    const checkboxes = getBodyCheckboxes();
    fireEvent.click(checkboxes[0]);
    expect(getBodyCheckboxes({ checked: true })).toHaveLength(1);
    await waitFor(() => expect(selectAll.indeterminate).toBe(true));
    fireEvent.click(selectAll); // uncheck everything, get out of mixed state
    // No checked checkboxes to find, helper function should throw
    await waitFor(() =>
      expect(() => getBodyCheckboxes({ checked: true })).toThrow()
    );
    expect(selectAll.indeterminate).toBe(false); // not in a mixed state
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
