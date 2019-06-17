import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { v1 } from 'uuid';
import Card from './card';
import {
  checkLoadMoreItems,
  checkOnDataLoad,
  checkOnLoadMoreItems,
} from './utils/scroll-data-loader';
import '../styles/components/data-list.scss';

const loadingMessageId = v1();

const DataList = ({
  data,
  onLoadMoreItems,
  hasMoreData,
  idKey,
  onSelect,
  selected,
  selectable,
}) => {
  const [loading, setLoading] = useState(false);
  const [loadMoreItems, setLoadMoreItems] = useState(false);
  const ref = useRef();

  useEffect(
    () => checkOnDataLoad(hasMoreData, setLoading, onLoadMoreItems, setLoadMoreItems, ref),
    [data],
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
        {data.map(({ [idKey]: id, ...content }) => (
          <Card
            {...{
              selectable,
              key: id,
              selected: !!selected[id],
              onSelect: () => onSelect(id),
            }}
          >
            {Object.values(content)}
          </Card>
        ))}
        {loading && <h4 key={loadingMessageId}>Loading...</h4>}
      </div>
    </div>
  );
};

DataList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onLoadMoreItems: PropTypes.func.isRequired,
  hasMoreData: PropTypes.bool.isRequired,
  idKey: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.instanceOf(Object),
  selectable: PropTypes.bool,
};

DataList.defaultProps = {
  idKey: 'id',
  selected: {},
  selectable: false,
};

export default DataList;
