import React from 'react';
// import PropTypes from 'prop-types';
import DataTable, { DataTableRows, DataTableBody } from '../components/data-table';
import ScrollItemsLoader from '../components/scroll-items-loader';

const DataTableDemo = ({
  data,
  loadMoreItems,
  hasMoreItems,
  idKey,
  onSelect,
  selected,
  selectable,
  columns,
  onHeaderClick,
}) => (
  <div className="data-table-demo__container">
    <DataTable
      {...{
        idKey,
        onSelect,
        selected,
        onHeaderClick,
        columns,
        selectable,
      }}
    >
      <ScrollItemsLoader
        idKey={idKey}
        onLoadMoreItems={loadMoreItems}
        hasMoreItems={hasMoreItems}
        scrollContainer
        items={(
          <DataTableRows
            {...{
              data,
              columns,
              onSelect,
              selected,
              idKey,
              selectable,
            }}
          />
)}
      />
    </DataTable>
  </div>
);

export default DataTableDemo;
