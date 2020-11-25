import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from 'react';
import PropTypes from 'prop-types';

import Button from './button';
import Loader from './loader';

import '../styles/components/data-loader.scss';

const ioSupport = 'IntersectionObserver' in window;

const withDataLoader = (BaseComponent) => {
  const Wrapper = (props) => {
    const {
      onLoadMoreItems,
      hasMoreData,
      data,
      loaderComponent,
      clickToLoad,
    } = props;
    // store this prop in a ref to not trigger re-creation of observer if the user
    // of this component forgot to memoize 'onLoadMoreItems' function.
    const onLoadMoreItemsRef = useRef(onLoadMoreItems);
    onLoadMoreItemsRef.current = onLoadMoreItems;

    const [loading, setLoading] = useState(false);
    const sentinelRef = useRef(null);

    const handleAskForMoreData = useCallback(() => {
      setLoading(true);
      onLoadMoreItemsRef.current();
    }, []);

    const observerCallbackRef = useRef();
    observerCallbackRef.current = ([{ isIntersecting }]) => {
      if (!isIntersecting || loading || !hasMoreData) {
        // skip if
        // - "Loading..." component not visible;
        // - currently loading more data; or
        // - no more data available
        return;
      }
      handleAskForMoreData();
    };

    const observer = useMemo(() => {
      if (!ioSupport || clickToLoad) {
        return;
      }
      // eslint-disable-next-line consistent-return
      return new window.IntersectionObserver((...entries) =>
        // use it inside an other function, otherwise will use the first version
        observerCallbackRef.current(...entries)
      );
    }, [clickToLoad]);

    // eslint-disable-next-line consistent-return
    useEffect(() => {
      if (sentinelRef.current && observer && !loading) {
        const element = sentinelRef.current;
        observer.observe(element);
        return () => observer.unobserve(element);
      }
    }, [observer, loading]);

    // reset loading flag when data length changes
    const length = data?.length;
    useEffect(() => {
      setLoading(false);
    }, [length]);

    let sentinelContent = loaderComponent;
    if ((!ioSupport || clickToLoad) && !loading) {
      sentinelContent = (
        <Button
          variant="secondary"
          onClick={handleAskForMoreData}
          data-testid="click-to-load-more"
        >
          Load more data
        </Button>
      );
    }

    return (
      <>
        <BaseComponent {...props} />
        <div className="data-loader__loading" ref={sentinelRef}>
          {hasMoreData && sentinelContent}
        </div>
      </>
    );
  };

  Wrapper.propTypes = {
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
     * Data that is being represented in the wrapped component
     */
    data: PropTypes.arrayOf(PropTypes.any).isRequired,
    /**
     * Use a button to load more data instead of having infinite scrolling
     */
    clickToLoad: PropTypes.bool,
  };

  Wrapper.defaultProps = {
    loaderComponent: <Loader />,
    clickToLoad: false,
  };

  return Wrapper;
};

export default withDataLoader;
