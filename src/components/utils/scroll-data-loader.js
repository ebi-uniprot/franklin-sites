const scrollOffsetPercentage = 10;
const scrollOffsetFactor = 1 + scrollOffsetPercentage / 100;

export const isNotScrollable = (node) => {
  const { scrollHeight, offsetHeight } = node.current;
  // console.log(scrollHeight, offsetHeight, scrollHeight <= offsetHeight * scrollOffsetFactor);
  return scrollHeight <= offsetHeight * scrollOffsetFactor;
};

export const isBottom = (node) => {
  const { scrollHeight, scrollTop, offsetHeight } = node.current;
  return scrollHeight - Math.ceil(scrollTop) <= offsetHeight * scrollOffsetFactor;
};

export const checkLoadMoreItems = (loading, hasMoreData, node, setLoadMoreItems) => {
  if (!loading && hasMoreData && isBottom(node)) {
    setLoadMoreItems(true);
  }
};

export const checkOnDataLoad = (
  hasMoreData,
  setLoading,
  onLoadMoreItems,
  setLoadMoreItems,
  node,
) => {
  if (hasMoreData && isNotScrollable(node)) {
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
