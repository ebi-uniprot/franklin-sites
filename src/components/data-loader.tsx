import {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
  ReactNode,
} from 'react';

import Button from './button';
import Loader from './loader';

import '../styles/components/data-loader.scss';

const ioSupport = 'IntersectionObserver' in window;

type WrapperProps = {
  /**
   * Callback to request more items if user scrolled to the bottom of the scroll-container or if
   * the scroll-container isn't scrollable yet because not enough items have been loaded yet. If
   * not provided this component will simply pass the data prop to the BaseComponent to be rendered
   * without observing scroll or triggering more data loading.
   */
  onLoadMoreItems: () => void;
  /**
   * A boolean to indicate that the parent has more items to provide.
   */
  hasMoreData: boolean;
  /**
   * A custom loader component
   */
  // eslint-disable-next-line react/require-default-props
  loaderComponent?: ReactNode;
  /**
   * Data that is being represented in the wrapped component
   */
  data: unknown[];
  /**
   * Use a button to load more data instead of having infinite scrolling
   */
  // eslint-disable-next-line react/require-default-props
  clickToLoad?: boolean;
};

const withDataLoader = (
  BaseComponent: FC<{ data: unknown[] }>
) => {
  const Wrapper: FC<WrapperProps> = ({
    onLoadMoreItems,
    hasMoreData,
    loaderComponent = <Loader />,
    data,
    clickToLoad = false,
    ...restProps
  }: WrapperProps) => {
    // store this prop in a ref to not trigger re-creation of observer if the user
    // of this component forgot to memoize 'onLoadMoreItems' function.
    const onLoadMoreItemsRef = useRef(onLoadMoreItems);
    onLoadMoreItemsRef.current = onLoadMoreItems;

    const [loading, setLoading] = useState(false);
    const sentinelRef = useRef<HTMLDivElement>(null);

    const handleAskForMoreData = useCallback(() => {
      setLoading(true);
      if (onLoadMoreItemsRef.current) {
        onLoadMoreItemsRef.current();
      }
    }, []);

    const observerCallbackRef = useRef<
      (entry: IntersectionObserverEntry) => void
    >();

    observerCallbackRef.current = ({ isIntersecting }) => {
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
      return new window.IntersectionObserver(([entry]) => {
        // use it inside an other function, otherwise will use the first version
        if (observerCallbackRef.current) {
          observerCallbackRef.current(entry);
        }
      });
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
        <BaseComponent data={data} {...restProps} />
        <div className="data-loader__loading" ref={sentinelRef}>
          {hasMoreData && sentinelContent}
        </div>
      </>
    );
  };

  return Wrapper;
};

export default withDataLoader;
