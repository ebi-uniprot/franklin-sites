import { render, fireEvent, screen } from '@testing-library/react';

import { DataListWithLoader as DataList } from '../data-list';

describe('DataList', () => {
  const data = Array.from({ length: 10 }, (_, index) => ({
    id: `id${index}`,
    content: index,
  }));

  let onLoadMoreItems: () => void;

  const renderList = ({ hasMoreData = true, clickToLoad = true } = {}) =>
    render(
      <DataList
        onLoadMoreItems={onLoadMoreItems}
        hasMoreData={hasMoreData}
        data={data}
        getIdKey={(datum) => datum.id}
        clickToLoad={clickToLoad}
        dataRenderer={(item) => <p>{item.content}</p>}
      />
    );

  beforeEach(() => {
    onLoadMoreItems = jest.fn();
  });

  it('should render autoload', () => {
    const { asFragment } = renderList({ clickToLoad: false });
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render click-to-load', () => {
    const { asFragment } = renderList();
    expect(asFragment()).toMatchSnapshot();
  });

  it('should request more data', () => {
    renderList();
    expect(onLoadMoreItems).not.toHaveBeenCalled();
    const clickToLoadMore = screen.getByTestId('click-to-load-more');
    fireEvent.click(clickToLoadMore);
    expect(onLoadMoreItems).toHaveBeenCalled();
  });

  it('should not show the option to load more data', () => {
    renderList({ hasMoreData: false });
    const clickToLoadMore = screen.queryByTestId('click-to-load-more');
    expect(clickToLoadMore).toBeNull();
  });
});
