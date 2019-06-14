import React from 'react';
// import PropTypes from 'prop-types';
import DataTable, { DataTableRows } from '../components/data-table';
import ScrollItemsLoader from '../components/scroll-items-loader';

const DataTableDemo = ({
  data,
  loadMoreItems,
  hasMoreItems,
  idKey,
  onSelect,
  selectedRows,
  selectable,
  columns,
  onHeaderClick,
}) => (
  <div className="data-table-demo__container">
    <DataTable
      {...{
        idKey,
        onSelect,
        selectedRows,
        onHeaderClick,
      }}
    >
      <ScrollItemsLoader
        idKey={idKey}
        onLoadMoreItems={loadMoreItems}
        hasMoreItems={hasMoreItems}
        items={(
          <DataTableRows
            {...{
              data,
              columns,
              onSelect,
              selectedRows,
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
