import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/components/data-list.scss';

let i = 0;

const InfiniteDataLoader = ({
  onLoadMoreData,
  loadingComponent,
  children,
  totalNumberDataPoints,
}) => {
  const [loading, setLoading] = useState(false);
  const [loadMoreData, setLoadMoreData] = useState(false);
  const dataListRef = useRef();
  const shouldLoadMoreData = () => {
    i += 1;
    console.log(i);
    const { scrollHeight, scrollTop, clientHeight } = dataListRef.current;
    const isNotScrollable = scrollHeight <= clientHeight;
    const isBottom = scrollHeight - Math.ceil(scrollTop) === clientHeight;
    const hasMoreData = children.length < totalNumberDataPoints;
    setLoadMoreData((isNotScrollable || isBottom) && !loading && hasMoreData);
  };

  const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  };

  const prevChildren = usePrevious(children);

  useEffect(() => {
    if (!prevChildren || children.length > prevChildren.length) {
      shouldLoadMoreData();
      setLoading(false);
    }
  }, [children]);

  useEffect(() => {
    if (loadMoreData) {
      setLoading(true);
      onLoadMoreData();
    }
  }, [loadMoreData]);

  return (
    <div className="data-list__wrapper">
      <div className="data-list__inner" ref={dataListRef} onScroll={shouldLoadMoreData}>
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
