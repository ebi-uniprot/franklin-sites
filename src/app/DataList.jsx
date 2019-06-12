import React from 'react';
import PropTypes from 'prop-types';
import Card from '../components/card';
import ScrollItemsLoader from '../components/scroll-items-loader';

const DataList = ({
  data, loadMoreItems, hasMoreItems, idKey, onSelect, selected,
}) => (
  <div className="data-list">
    <div className="data-list__wrapper">
      <ScrollItemsLoader
        idKey={idKey}
        onLoadMoreItems={loadMoreItems}
        hasMoreItems={hasMoreItems}
        items={data.map(({ [idKey]: id, content }) => (
          <Card key={id} selectable selected={!!selected[id]} onSelect={() => onSelect(id)}>
            <p>{content}</p>
          </Card>
        ))}
      />
    </div>
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
