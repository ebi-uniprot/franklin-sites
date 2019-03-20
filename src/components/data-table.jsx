import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/components/data-table.scss';

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.handleHeaderKeyPress = this.handleHeaderKeyPress.bind(this);
  }

  static getRowClassName(index, selected = false) {
    let className;
    if (selected) {
      className = 'data-table__row--selected';
    } else {
      className = index % 2 === 0 ? 'data-table__row--even' : 'data-table__row--odd';
    }
    return `data-table__row ${className}`;
  }

  static getSortableColumnClassName(column) {
    let className;
    if ('sorted' in column) {
      className = column.sorted === 'ascend' ? 'data-table__header--ascend' : 'data-table__header--descend';
    } else {
      className = 'data-table__header--sortable';
    }
    return `data-table__header ${className}`;
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
      idKey,
    } = this.props;
    return (
      <div className="data-table data-table--collapsible">
        <div className="data-table__head">
          <div className="data-table__row">
            {selectable && (
              <div className="data-table__header--checkbox" key="select">
                {''}
              </div>
            )}
            {columns.map(column => (column.sortable ? (
              <button
                type="button"
                key={column.name}
                className={DataTable.getSortableColumnClassName(column)}
                onClick={() => onHeaderClick(column.name)}
                onKeyPress={() => this.handleHeaderKeyPress(column.name)}
              >
                {column.label}
              </button>
            ) : (
              <div key={column.name} className="data-table__header">
                {column.label}
              </div>
            )))}
          </div>
        </div>
        <div className="data-table__body">
          {data.map((row, i) => (
            <div className={DataTable.getRowClassName(i, row[idKey] in selected)} key={row[idKey]}>
              {selectable && (
                <div className="data-table__data--checkbox" key={`${row[idKey]}_select`}>
                  <input
                    id={row[idKey]}
                    type="checkbox"
                    onChange={() => onSelect(row[idKey])}
                    checked={row[idKey] in selected}
                  />
                </div>
              )}
              {columns.map(column => (
                <div className="data-table__data" key={`${row[idKey]}_${column.name}`}>
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
  idKey: PropTypes.string,
};

DataTable.defaultProps = {
  selectable: false,
  selected: {},
  onSelect: () => {},
  onHeaderClick: () => {},
  idKey: 'id',
};

export default DataTable;
