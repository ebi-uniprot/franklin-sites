import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/results-table.scss';

const DataTable = ({
  columns, data, selectable = false, selected = {}, onSelect,
}) => (
  <div className="results-table">
    <div className="table-head">
      <div className="table-row">
        {selectable && (
          <div className="table-header-select" key="select">
            {''}
          </div>
        )}
        {columns.map(column => (
          <div className="table-header" key={column.name}>
            {column.label}
          </div>
        ))}
      </div>
    </div>
    <div className="table-body">
      {data.map((row, i) => (
        <div className={i % 2 === 0 ? 'table-row' : 'table-row table-row-odd'} key={row.id}>
          {selectable && (
            <div className="table-data-select" key={`${row.id}_select`}>
              <input
                id={row.id}
                type="checkbox"
                onChange={() => onSelect(row.id)}
                checked={row.id in selected}
              />
            </div>
          )}
          {columns.map(column => (
            <div className="table-data" key={`${row.id}_${column.name}`}>
              {column.render(row)}
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

DataTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectable: PropTypes.bool,
  selected: PropTypes.shape({}),
  onSelect: PropTypes.func,
};

DataTable.defaultProps = {
  selectable: false,
  selected: {},
  onSelect: () => {},
};

export default DataTable;
