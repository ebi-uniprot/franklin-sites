import React, {
  useState, useRef, useEffect, cloneElement,
} from 'react';
import PropTypes from 'prop-types';
import v1 from 'uuid';
import '../styles/components/data-list.scss';

const ScrollDataLoader = ({
  onLoadMoreData,
  loadingIndicator,
  scrollContainer,
  items,
  hasMoreData,
}) => {
  const [loading, setLoading] = useState(false);
  const [loadMoreData, setLoadMoreData] = useState(false);
  const dataListRef = useRef();

  const isNotScrollable = () => {
    const { scrollHeight, clientHeight } = dataListRef.current;
    return scrollHeight <= clientHeight;
  };

  const isBottom = () => {
    const { scrollHeight, scrollTop, clientHeight } = dataListRef.current;
    return scrollHeight - Math.ceil(scrollTop) === clientHeight;
  };

  const checkLoadMoreData = () => {
    if (!loading && hasMoreData && isBottom()) {
      setLoadMoreData(true);
    }
  };

  useEffect(() => {
    if (isNotScrollable()) {
      onLoadMoreData();
    } else {
      setLoading(false);
      setLoadMoreData(false);
    }
  }, [items]);

  useEffect(() => {
    if (loadMoreData) {
      setLoading(true);
      onLoadMoreData();
    }
  }, [loadMoreData]);

  useEffect(() => {
    setLoading(false);
  }, [hasMoreData]);

  return cloneElement(
    scrollContainer,
    {
      ref: dataListRef,
      onScroll: checkLoadMoreData,
      className: `${scrollContainer.props.className} scroll-container`,
    },
    [items.length > 0 && items, (loading || items.length === 0) && loadingIndicator],
  );
};

ScrollDataLoader.propTypes = {
  onLoadMoreData: PropTypes.func.isRequired,
  loadingIndicator: PropTypes.element,
  scrollContainer: PropTypes.element,
  items: PropTypes.arrayOf(PropTypes.element).isRequired,
  hasMoreData: PropTypes.bool.isRequired,
};

ScrollDataLoader.defaultProps = {
  scrollContainer: <div />,
  loadingIndicator: <h4 key={v1()}>Loading...</h4>,
};

export default ScrollDataLoader;
