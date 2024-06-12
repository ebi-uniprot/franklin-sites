import {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
  ReactNode,
  ComponentType,
} from 'react';

import Button from './button';
import Loader from './loader';

import '../styles/components/data-loader.scss';

export type WrapperProps<D> = {
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
  loaderComponent?: ReactNode;
  /**
   * Data that is being represented in the wrapped component
   */
  data: D[];
  /**
   * Use a button to load more data instead of having infinite scrolling.
   * If this prop is a string or a node, it will render this within the button
   */
  clickToLoad?: boolean | ReactNode;
};

type BaseComponentProps<D> = {
  data: D[];
};

function withDataLoader<
  // data type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  D extends Record<string, any>,
  // props types of wrapped component
  P extends BaseComponentProps<D>,
>(BaseComponent: ComponentType<P>) {
  const Wrapper: ComponentType<P & WrapperProps<P['data'][0]>> = ({
    onLoadMoreItems,
    hasMoreData,
    loaderComponent = <Loader />,
    data,
    clickToLoad = false,
    ...props
  }) => {
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

    const observerCallbackRef =
      useRef<(entry: IntersectionObserverEntry) => void>();

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
      if (!('IntersectionObserver' in window) || clickToLoad) {
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
    if ((!('IntersectionObserver' in window) || clickToLoad) && !loading) {
      sentinelContent = (
        <Button
          variant="secondary"
          onClick={handleAskForMoreData}
          data-testid="click-to-load-more"
        >
          {(typeof clickToLoad === 'string' && clickToLoad) || 'Load more data'}
        </Button>
      );
    }

    // TS doesn't like when I separate data from props when asserting as P
    const baseComponentProps = { ...props, data };

    return (
      <>
        <BaseComponent {...(baseComponentProps as unknown as P)} />
        <div className="data-loader__loading" ref={sentinelRef}>
          {hasMoreData && sentinelContent}
        </div>
      </>
    );
  };

  return Wrapper;
}

export default withDataLoader;
