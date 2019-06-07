import React from 'react';
import PropTypes from 'prop-types';
import Card from '../components/card';
import ScrollDataLoader from '../components/scroll-data-loader';

const DataList = ({
  data, loadMoreData, hasMoreData, idKey, onSelect, selected,
}) => (
  <div className="data-list">
    <div className="data-list__wrapper">
      <ScrollDataLoader
        idKey={idKey}
        onLoadMoreData={loadMoreData}
        hasMoreData={hasMoreData}
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
  loadMoreData: PropTypes.func.isRequired,
  hasMoreData: PropTypes.bool.isRequired,
  idKey: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.instanceOf(Object).isRequired,
};

DataList.defaultProps = {
  idKey: 'id',
};

export default DataList;
