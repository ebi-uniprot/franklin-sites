import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { v1 } from 'uuid';
import {
  checkLoadMoreItems,
  checkOnDataLoad,
  checkOnLoadMoreItems,
} from './utils/scroll-data-loader';
import '../styles/components/data-list.scss';

const loadingMessageId = v1();

const DataList = ({ onLoadMoreItems, hasMoreData, items }) => {
  const [loading, setLoading] = useState(false);
  const [loadMoreItems, setLoadMoreItems] = useState(false);
  const ref = useRef();

  useEffect(
    () => checkOnDataLoad(hasMoreData, setLoading, onLoadMoreItems, setLoadMoreItems, ref),
    [items.length],
  );

  useEffect(() => checkOnLoadMoreItems(loadMoreItems, setLoading, onLoadMoreItems), [
    loadMoreItems,
  ]);

  return (
    <div className="data-list__wrapper">
      <div
        className="data-list__scroll-container"
        onScroll={() => checkLoadMoreItems(loading, hasMoreData, ref, setLoadMoreItems)}
        ref={ref}
      >
        {items}
        {loading && <h4 key={loadingMessageId}>Loading...</h4>}
      </div>
    </div>
  );
};

DataList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onLoadMoreItems: PropTypes.func.isRequired,
  hasMoreData: PropTypes.bool.isRequired,
  /**
   * An array of JSX elements which will populate the scrollContainer.
   */
  items: PropTypes.arrayOf(PropTypes.element).isRequired,
};

DataList.defaultProps = {
  idKey: 'id',
  selected: {},
  selectable: false,
};

export default DataList;
