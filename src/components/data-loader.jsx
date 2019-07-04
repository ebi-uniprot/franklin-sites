import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { v1 } from 'uuid';
import '../styles/components/data-loader.scss';

const scrollOffsetPercentage = 10;
const scrollOffsetFactor = 1 + scrollOffsetPercentage / 100;

const isNotScrollable = (node) => {
  const { scrollHeight, offsetHeight } = node.current;
  return scrollHeight <= offsetHeight * scrollOffsetFactor;
};

const withDataLoader = BaseComponent => (props) => {
  const {
    onLoadMoreItems, hasMoreData, data, loaderComponent = 'Loading...',
  } = props;
  const [loading, setLoading] = useState(false);
  const [loadMoreItems, setLoadMoreItems] = useState(false);
  const ref = useRef();
  const loadingMessageId = v1();

  useEffect(() => {
    if (hasMoreData && isNotScrollable(ref)) {
      setLoading(true);
      onLoadMoreItems();
    } else {
      setLoading(false);
      setLoadMoreItems(false);
    }
  }, [data.length, hasMoreData, onLoadMoreItems]);

  useEffect(() => {
    if (loadMoreItems) {
      setLoading(true);
      onLoadMoreItems();
    }
  }, [loadMoreItems, onLoadMoreItems]);

  const isBottom = () => {
    const { scrollHeight, scrollTop, offsetHeight } = ref.current;
    return scrollHeight - Math.ceil(scrollTop) <= offsetHeight * scrollOffsetFactor;
  };

  const checkLoadMoreItems = () => {
    if (!loading && hasMoreData && isBottom(ref)) {
      setLoadMoreItems(true);
    }
  };

  return (
    <div className="data-loader__wrapper">
      <div
        className="data-loader__scroll-container"
        onScroll={() => checkLoadMoreItems()}
        ref={ref}
      >
        <BaseComponent {...props} />
        {loading && (
          <div className="data-loader__loading">
            <h4 key={loadingMessageId}>{loaderComponent}</h4>
          </div>
        )}
      </div>
    </div>
  );
};

withDataLoader.propTypes = {
  /**
   * Callback to request more items if user scrolled to the bottom of the scroll-container or if
   * the scroll-container isn't scrollable yet because not enough items have been loaded yet.
   */
  onLoadMoreItems: PropTypes.func.isRequired,
  /**
   * A boolean to indicate that the parent has more items to provide.
   */
  hasMoreData: PropTypes.bool.isRequired,
  /**
   * A custom loader component
   */
  loaderComponent: PropTypes.element,
};

export default withDataLoader;
