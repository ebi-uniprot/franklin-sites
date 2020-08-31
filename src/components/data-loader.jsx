/* eslint react/prop-types: 0 */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { throttle } from 'lodash-es';
import '../styles/components/data-loader.scss';

const scrollOffsetPercentage = 10;
const scrollOffsetFactor = 1 + scrollOffsetPercentage / 100;
const handleScrollWait = 500;

const withDataLoader = (BaseComponent) => (props) => {
  const {
    onLoadMoreItems,
    hasMoreData,
    data,
    scrollRef,
    loaderComponent = 'Loading...',
  } = props;
  const [loading, setLoading] = useState(false);
  const [loadMoreItems, setLoadMoreItems] = useState(false);

  useEffect(() => {
    const { scrollHeight, offsetHeight } = scrollRef.current;
    const isNotScrollable = scrollHeight < offsetHeight * scrollOffsetFactor;
    if (hasMoreData && isNotScrollable) {
      setLoading(true);
      onLoadMoreItems();
    } else {
      setLoading(false);
      setLoadMoreItems(false);
    }
  }, [data.length, hasMoreData, onLoadMoreItems, scrollRef]);

  useEffect(() => {
    if (loadMoreItems) {
      setLoading(true);
      onLoadMoreItems();
    }
  }, [loadMoreItems, onLoadMoreItems]);

  useEffect(() => {
    const ref = scrollRef.current;
    const isBottom = () => {
      const { scrollHeight, scrollTop, offsetHeight } = ref;
      return (
        scrollHeight - Math.ceil(scrollTop) <= offsetHeight * scrollOffsetFactor
      );
    };
    const handleScroll = throttle(() => {
      if (!loading && hasMoreData && isBottom(ref)) {
        setLoadMoreItems(true);
      }
    }, handleScrollWait);
    ref.addEventListener('scroll', handleScroll, {
      capture: true,
    });

    // Cleanup
    return () => {
      ref.removeEventListener('scroll', handleScroll);
    };
  }, [hasMoreData, loading, scrollRef]);

  return (
    <div className="data-loader__wrapper">
      <BaseComponent {...props} />
      {loading && <div className="data-loader__loading">{loaderComponent}</div>}
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
  /**
   * A ref to a parent component which withDataLoader inspects through scrollHeight and offsetHeight
   * to determine if more data can be loaded.
   */
  scrollRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    .isRequired,
};

export default withDataLoader;
