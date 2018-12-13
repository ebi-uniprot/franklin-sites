import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/results-table.scss';

const DataTable = ({ columns, data }) => (
  <div className="results-table">
    <div className="table-head">
      <div className="table-row">
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
};

export default DataTable;
