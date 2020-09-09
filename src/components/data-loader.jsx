/* eslint react/prop-types: 0 */
import React, { useState, useEffect, useRef } from 'react';
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
    scrollDataAttribute,
    loaderComponent = 'Loading...',
  } = props;
  const [loading, setLoading] = useState(false);
  const [loadMoreItems, setLoadMoreItems] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const attribute = `*[data-loader-scroll="${scrollDataAttribute}"]`;
    const elements = document.querySelectorAll(attribute);
    if (!elements.length) {
      throw Error(`Cannot find element with attribute :${attribute}`);
    } else if (elements.length > 1) {
      throw Error(`Found more than one element with attribute :${attribute}`);
    }
    [scrollRef.current] = elements;
  }, [scrollDataAttribute]);

  const isNotScrollable = () => {
    const { scrollHeight, offsetHeight } = scrollRef.current;
    return scrollHeight <= offsetHeight * scrollOffsetFactor;
  };

  useEffect(() => {
    if (hasMoreData && isNotScrollable()) {
      setLoadMoreItems(true);
    } else {
      setLoading(false);
      setLoadMoreItems(false);
    }
  }, [data.length, hasMoreData]);

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
      setLoadMoreItems(!loading && hasMoreData && ref && isBottom(ref));
    }, handleScrollWait);
    ref.addEventListener('scroll', handleScroll, {
      passive: false,
    });
    // Cleanup
    return () => {
      handleScroll.cancel();
      if (ref) {
        ref.removeEventListener('scroll', handleScroll);
      }
    };
  }, [hasMoreData, loading]);
  return (
    <>
      <BaseComponent {...props} />
      {loading && <div className="data-loader__loading">{loaderComponent}</div>}
    </>
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
   * The value of the data-loader-scroll attribute set on a parent element which withDataLoader inspects
   * through scrollHeight and offsetHeight to determine if more data can be loaded.
   */
  scrollDataAttribute: PropTypes.string.isRequired,
};

export default withDataLoader;
