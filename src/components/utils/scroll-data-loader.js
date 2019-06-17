const scrollOffsetPercentage = 10;
const scrollOffsetFactor = 1 + scrollOffsetPercentage / 100;

export const isNotScrollable = (node) => {
  const { scrollHeight, offsetHeight } = node.current;
  return scrollHeight <= offsetHeight * scrollOffsetFactor;
};

export const isBottom = (node) => {
  const { scrollHeight, scrollTop, offsetHeight } = node.current;
  return scrollHeight - Math.ceil(scrollTop) <= offsetHeight * scrollOffsetFactor;
};

export const checkLoadMoreItems = (loading, hasMoreData, ref, setLoadMoreItems) => {
  if (!loading && hasMoreData && isBottom(ref)) {
    setLoadMoreItems(true);
  }
};

export const checkOnDataLoad = (
  hasMoreData,
  setLoading,
  onLoadMoreItems,
  setLoadMoreItems,
  ref,
) => {
  if (hasMoreData && isNotScrollable(ref)) {
    setLoading(true);
    onLoadMoreItems();
  } else {
    setLoading(false);
    setLoadMoreItems(false);
  }
};

export const checkOnLoadMoreItems = (loadMoreItems, setLoading, onLoadMoreItems) => {
  if (loadMoreItems) {
    setLoading(true);
    onLoadMoreItems();
  }
};
