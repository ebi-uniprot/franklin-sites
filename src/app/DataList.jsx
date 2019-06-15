import React from 'react';
import PropTypes from 'prop-types';
import Card from '../components/card';
import ScrollItemsLoader from '../components/scroll-items-loader';

const DataList = ({
  data,
  onLoadMoreItems,
  hasMoreData,
  idKey,
  onSelect,
  selected,
  selectable,
}) => (
  <div className="data-list__wrapper">
    <ScrollItemsLoader
      {...{
        idKey,
        onLoadMoreItems,
        hasMoreItems: hasMoreData,
        items: data.map(({ [idKey]: id, ...content }) => (
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
        )),
      }}
    />
  </div>
);

DataList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadMoreItems: PropTypes.func.isRequired,
  hasMoreItems: PropTypes.bool.isRequired,
  idKey: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.instanceOf(Object).isRequired,
};

DataList.defaultProps = {
  idKey: 'id',
};

export default DataList;
