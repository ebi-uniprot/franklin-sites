import React, {
  useState, useRef, useEffect, cloneElement,
} from 'react';
import PropTypes from 'prop-types';
import '../styles/components/data-list.scss';

const ScrollDataLoader = ({
  onLoadMoreData,
  loadingIndicator,
  scrollContainer,
  items,
  totalNumberDataPoints,
}) => {
  const [loading, setLoading] = useState(false);
  const [loadMoreData, setLoadMoreData] = useState(false);
  const dataListRef = useRef();
  const checkLoadMoreData = () => {
    const noMoreData = items.length === totalNumberDataPoints;
    if (loading || noMoreData) {
      return;
    }
    const { scrollHeight, scrollTop, clientHeight } = dataListRef.current;
    const isNotScrollable = scrollHeight <= clientHeight;
    const isBottom = scrollHeight - Math.ceil(scrollTop) === clientHeight;
    setLoadMoreData(isNotScrollable || isBottom);
  };

  const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  };

  const prevItems = usePrevious(items);

  useEffect(() => {
    if (!prevItems || items.length > prevItems.length) {
      setLoading(false);
      checkLoadMoreData();
    }
  }, [items]);

  useEffect(() => {
    if (loadMoreData) {
      setLoading(true);
      onLoadMoreData();
    }
  }, [loadMoreData]);

  const c = cloneElement(
    scrollContainer,
    {
      ref: dataListRef,
      onScroll: checkLoadMoreData,
      className: `${scrollContainer.props.className} scroll-container`,
    },
    [items.length > 0 && items, (loading || items.length === 0) && loadingIndicator],
  );
  return c;
};

// InfiniteDataLoader.propTypes = {
//   totalNumberDataPoints: PropTypes.number.isRequired,
//   loadingIndicator: PropTypes.element,
//   onLoadMoreData: PropTypes.func.isRequired,
//   children: PropTypes.arrayOf(PropTypes.element).isRequired,
//   selectedRows: PropTypes.shape({}),
// };

// InfiniteDataLoader.defaultProps = {
//   selectedRows: {},
//   loadingIndicator: <h4>Loading...</h4>,
// };

export default ScrollDataLoader;
