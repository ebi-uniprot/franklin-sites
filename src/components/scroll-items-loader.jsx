import React, {
  useState, useRef, useEffect, cloneElement,
} from 'react';
import PropTypes from 'prop-types';
import v1 from 'uuid';

import '../styles/components/scroll-items-loader.scss';

const scrollOffsetFactor = 0.1;

const ScrollItemsLoader = ({
  onLoadMoreItems,
  loadingIndicator,
  scrollContainer,
  items,
  hasMoreItems,
}) => {
  const { className: scrollContainerClassName } = scrollContainer.props;
  const [loading, setLoading] = useState(false);
  const [loadMoreItems, setLoadMoreItems] = useState(false);
  const ref = useRef();

  const isNotScrollable = () => {
    const { scrollHeight, clientHeight } = ref.current;
    return (1 - scrollOffsetFactor) * scrollHeight <= clientHeight;
  };

  const isBottom = () => {
    const { scrollHeight, scrollTop, clientHeight } = ref.current;
    return scrollHeight - Math.ceil(scrollTop) < clientHeight * (1 + scrollOffsetFactor);
  };

  const checkLoadMoreItems = () => {
    if (!loading && hasMoreItems && isBottom()) {
      setLoadMoreItems(true);
    }
  };

  useEffect(() => {
    if (isNotScrollable() && hasMoreItems) {
      setLoading(true);
      onLoadMoreItems();
    } else {
      setLoading(false);
      setLoadMoreItems(false);
    }
  }, [items]);

  useEffect(() => {
    if (loadMoreItems) {
      setLoading(true);
      onLoadMoreItems();
    }
  }, [loadMoreItems]);

  return cloneElement(
    scrollContainer,
    {
      ref,
      onScroll: checkLoadMoreItems,
      className: `${scrollContainerClassName || ''} scroll-container`,
    },
    [items, loading && loadingIndicator],
  );
};

ScrollItemsLoader.propTypes = {
  /**
   * Callback to request more items if user scrolled to the bottom of the scroll-container or if
   * the scroll-container isn't scrollable yet because not enough items have been loaded yet.
   */
  onLoadMoreItems: PropTypes.func.isRequired,
  /**
   * Component to indicate to user that more items are being loaded.
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
   * A boolean to indicate that the parent has more items to provide.
   */
  hasMoreItems: PropTypes.bool.isRequired,
};

ScrollItemsLoader.defaultProps = {
  scrollContainer: <div />,
  loadingIndicator: <h4 key={v1()}>Loading...</h4>,
};

export default ScrollItemsLoader;
