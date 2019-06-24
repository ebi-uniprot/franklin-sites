import {
  checkLoadMoreItems,
  checkOnDataLoad,
  checkOnLoadMoreItems,
  isNotScrollable,
  isBottom,
} from '../../utils/scroll-data-loader';

const bottomNode = { current: { scrollHeight: 2320, scrollTop: 1848, offsetHeight: 454 } };
const notBottomNode = { current: { scrollHeight: 2320, scrollTop: 1, offsetHeight: 454 } };
const scrollableNode = { current: { scrollHeight: 3000, offsetHeight: 300 } };
const notScrollableNode = { current: { scrollHeight: 300, offsetHeight: 300 } };
let setLoadMoreItems;
let setLoading;
let onLoadMoreItems;

describe('checkLoadMoreItems', () => {
  beforeEach(() => {
    setLoadMoreItems = jest.fn();
  });
  test('should call checkLoadMoreItems with value true', () => {
    checkLoadMoreItems(false, true, bottomNode, setLoadMoreItems);
    expect(setLoadMoreItems).toBeCalledWith(true);
  });
  test('should not call checkLoadMoreItems with value true', () => {
    checkLoadMoreItems(true, true, bottomNode, setLoadMoreItems);
    expect(setLoadMoreItems).toBeCalledTimes(0);
  });
});

describe('checkOnDataLoad', () => {
  beforeEach(() => {
    setLoading = jest.fn();
    onLoadMoreItems = jest.fn();
    setLoadMoreItems = jest.fn();
  });
  test('should call setLoading with value true and call onLoadMoreItems', () => {
    checkOnDataLoad(true, setLoading, onLoadMoreItems, setLoadMoreItems, notScrollableNode);
    expect(setLoading).toBeCalledWith(true);
    expect(onLoadMoreItems).toBeCalled();
  });
  test('should call setLoading with value false and call setLoadMoreItems with value false', () => {
    checkOnDataLoad(false, setLoading, onLoadMoreItems, setLoadMoreItems, notScrollableNode);
    expect(setLoading).toBeCalledWith(false);
    expect(setLoadMoreItems).toBeCalledWith(false);
  });
});

describe('isNotScrollable', () => {
  test('should return true', () => {
    expect(isNotScrollable(notScrollableNode)).toEqual(true);
  });
  test('should return false', () => {
    expect(isNotScrollable(scrollableNode)).toEqual(false);
  });
});

describe('isBottom', () => {
  test('should return true', () => {
    expect(isBottom(bottomNode)).toEqual(true);
  });
  test('should return false', () => {
    expect(isBottom(notBottomNode)).toEqual(false);
  });
});

describe('checkOnLoadMoreItems', () => {
  beforeEach(() => {
    setLoading = jest.fn();
    onLoadMoreItems = jest.fn();
  });
  test('should call setLoading with value true and call onLoadMoreItems', () => {
    checkOnLoadMoreItems(true, setLoading, onLoadMoreItems);
    expect(setLoading).toBeCalledWith(true);
    expect(onLoadMoreItems).toBeCalled();
  });
  test('should not call setLoading or setLoadMoreItems', () => {
    checkOnLoadMoreItems(false, setLoading, onLoadMoreItems);
    expect(setLoading).toBeCalledTimes(0);
    expect(onLoadMoreItems).toBeCalledTimes(0);
  });
});
