import React from 'react';
import PropTypes from 'prop-types';
import '../../dist/components/results-table.css';

const ResultsTable = ({ columns, data }) => (
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
        <div className={i % 2 === 0 ? 'table-row' : 'table-row table-row-odd'}>
          {columns.map(column => (
            <div className="table-data" key={column.name}>
              {column.render(row)}
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

ResultsTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.obj).isRequired,
  data: PropTypes.arrayOf(PropTypes.obj).isRequired,
};

export default ResultsTable;
