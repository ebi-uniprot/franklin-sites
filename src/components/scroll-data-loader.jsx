import React, {
  useState, useRef, useEffect, cloneElement,
} from 'react';
import PropTypes from 'prop-types';
import v1 from 'uuid';
import '../styles/components/scroll-data-loader.scss';

const ScrollDataLoader = ({
  onLoadMoreData,
  loadingIndicator,
  scrollContainer,
  items,
  hasMoreData,
}) => {
  const { className: scrollContainerClassName } = scrollContainer.props;
  const [loading, setLoading] = useState(false);
  const [loadMoreData, setLoadMoreData] = useState(false);
  const ref = useRef();

  const isNotScrollable = () => {
    const { scrollHeight, clientHeight } = ref.current;
    return scrollHeight <= clientHeight;
  };

  const isBottom = () => {
    const { scrollHeight, scrollTop, clientHeight } = ref.current;
    return scrollHeight - Math.ceil(scrollTop) === clientHeight;
  };

  const checkLoadMoreData = () => {
    if (!loading && hasMoreData && isBottom()) {
      setLoadMoreData(true);
    }
  };

  useEffect(() => {
    if (isNotScrollable() && hasMoreData) {
      onLoadMoreData();
    } else {
      setLoading(false);
      setLoadMoreData(false);
    }
  }, [items]);

  useEffect(() => {
    if (loadMoreData && hasMoreData) {
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
      ref,
      onScroll: checkLoadMoreData,
      className: `${scrollContainerClassName || ''} scroll-container`,
    },
    [items.length > 0 && items, (loading || items.length === 0) && loadingIndicator],
  );
};

ScrollDataLoader.propTypes = {
  /**
   * Callback to request more data if user scrolled to the bottom of the scroll-container or if
   * the scroll-container isn't scrollable yet because not enough items have been loaded yet.
   */
  onLoadMoreData: PropTypes.func.isRequired,
  /**
   * Component to indicate to user that more data is being loaded.
   */
  loadingIndicator: PropTypes.element,
  /**
   * The component which will hold the items and is scrolled over.
   */
  scrollContainer: PropTypes.element,
  /**
   * An array of JSX elements which will populate the scrollContainer.
   */
  items: PropTypes.arrayOf(PropTypes.element).isRequired,
  /**
   * A boolean to indicate that the parent has more data to provide.
   */
  hasMoreData: PropTypes.bool.isRequired,
};

ScrollDataLoader.defaultProps = {
  scrollContainer: <div />,
  loadingIndicator: <h4 key={v1()}>Loading...</h4>,
};

export default ScrollDataLoader;
