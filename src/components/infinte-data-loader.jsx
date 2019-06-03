import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/components/data-list.scss';

const InfiniteDataLoader = ({
  onLoadMoreData,
  loadingComponent,
  children,
  totalNumberDataPoints,
}) => {
  const [loading, setLoading] = useState(false);
  const [loadMoreData, setLoadMoreData] = useState(false);
  const ref = useRef();
  const shouldLoadMoreData = () => {
    const { scrollHeight, scrollTop, clientHeight } = ref.current;
    const isNotScrollable = scrollHeight <= clientHeight;
    const isBottom = scrollHeight - Math.ceil(scrollTop) === clientHeight;
    const hasMoreData = children.length < totalNumberDataPoints;
    console.log(loading);
    console.log((isNotScrollable || isBottom) && !loading && hasMoreData);
    setLoadMoreData((isNotScrollable || isBottom) && !loading && hasMoreData);
  };

  function usePrevious(value) {
    const r = useRef();
    useEffect(() => {
      r.current = value;
    });
    return r.current;
  }

  const prevChildren = usePrevious(children);

  useEffect(() => {
    console.log(children, prevChildren);
    if (!prevChildren || children.length > prevChildren.length) {
      shouldLoadMoreData();
    }
  }, [children]);

  useEffect(() => {
    if (loadMoreData) {
      setLoading(true);
      onLoadMoreData();
      setLoading(false);
    }
  }, [loadMoreData]);

  return (
    <div className="data-list__wrapper">
      <div className="data-list__inner" ref={ref} onScroll={shouldLoadMoreData}>
        {children.length > 0 && children}
        {(loading || children.length === 0) && loadingComponent}
      </div>
    </div>
  );
};

InfiniteDataLoader.propTypes = {
  totalNumberDataPoints: PropTypes.number.isRequired,
  loadingComponent: PropTypes.element,
  onLoadMoreData: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  selectedRows: PropTypes.shape({}),
};

InfiniteDataLoader.defaultProps = {
  selectedRows: {},
  loadingComponent: <h4>Loading...</h4>,
};

export default InfiniteDataLoader;
