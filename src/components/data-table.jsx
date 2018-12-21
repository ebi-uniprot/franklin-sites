import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/components/data-table.scss';

const getRowClassName = (index, selected = false) => {
  if (selected) {
    return 'table-row-selected';
  }
  return index % 2 === 0 ? 'table-row-even' : 'table-row-odd';
};

const getColumnClassName = (column) => {
  if ('sorted' in column) {
    return column.sorted === 'ascend' ? 'table-header-ascend' : 'table-header-descend';
  }
  console.log(column);
  return column.sortable ? 'table-header-sortable' : 'table-header';
};

class DataTable extends Component {
  //   columns, data, selectable = false, selected = {}, onSelect,
  // }) =>
  constructor(props) {
    super(props);
    this.handleHeaderKeyPress = this.handleHeaderKeyPress.bind(this);
  }

  handleHeaderKeyPress(event, columnName) {
    const { onHeaderClick } = this.props;
    if (event.key === 'Enter') {
      onHeaderClick(columnName);
    }
  }

  render() {
    const {
      columns,
      data,
      selectable = false,
      selected = {},
      onSelect,
      onHeaderClick,
    } = this.props;
    return (
      <div className="data-table">
        <div className="table-head">
          <div className="table-row">
            {selectable && (
              <div className="table-header-checkbox" key="select">
                {''}
              </div>
            )}
            {columns.map(column => (column.sortable ? (
              <button
                type="button"
                key={column.name}
                className={getColumnClassName(column)}
                onClick={() => onHeaderClick(column.name)}
                onKeyPress={() => this.handleHeaderKeyPress(column.name)}
              >
                {column.label}
              </button>
            ) : (
              <div key={column.name} className={getColumnClassName(column)}>
                {column.label}
              </div>
            )))}
          </div>
        </div>
        <div className="table-body">
          {data.map((row, i) => (
            <div className={getRowClassName(i, row.id in selected)} key={row.id}>
              {selectable && (
                <div className="table-data-checkbox" key={`${row.id}_select`}>
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
  }
}

DataTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectable: PropTypes.bool,
  selected: PropTypes.shape({}),
  onSelect: PropTypes.func,
  onHeaderClick: PropTypes.func,
};

DataTable.defaultProps = {
  selectable: false,
  selected: {},
  onSelect: () => {},
  onHeaderClick: () => {},
};

export default DataTable;
