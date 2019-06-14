import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import '../styles/components/data-table.scss';

export const DataTableRows = ({
  data, columns, onSelect, selectedRows, idKey, selectable,
}) =>
  data.map((row) => {
    const { [idKey]: id } = row;
    const isSelected = !!selectedRows[id];
    let className = 'data-table__table__body__cell ';
    if (selectable && isSelected) {
      className += 'data-table__table__body__cell--selected';
    }
    return (
      <tr key={id}>
        {selectable && (
          <td key={`${id}-select-column`} className={className}>
            <input type="checkbox" onChange={() => onSelect(id)} checked={isSelected} />
          </td>
        )}
        {columns.map(column => (
          <td key={`${id}-${column.name}`} className={className}>
            {column.render(row)}
          </td>
        ))}
      </tr>
    );
  });

const DataTable = ({
  columns,
  data,
  onHeaderClick,
  selectable,
  selectedRows,
  onSelect,
  idKey,
  children,
}) => (
  <Fragment>
    <div className="data-table__cover" />
    <div className="data-table__container">
      <table className="data-table__table">
        <thead className="data-table__table__header">
          <tr className="data-table__table__header__row">
            {selectable && (
              <th key="selectable-column" className="data-table__table__header__row__cell">
                {' '}
              </th>
            )}
            {columns.map((column) => {
              let className = 'data-table__table__header__row__cell ';
              let onClick;
              const {
                sorted, name, label, sortable,
              } = column;
              if (sortable) {
                onClick = () => onHeaderClick(column.name);
                if (sorted) {
                  className
                    += column.sorted === 'ascend'
                      ? 'data-table__table__header__row__cell--ascend'
                      : 'data-table__table__header__row__cell--descend';
                } else {
                  className += 'data-table__table__header__row__cell--sortable';
                }
              }
              return (
                <th key={name} className={className} onClick={onClick}>
                  {label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="data-table__table__body">
          {children || (
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
        </tbody>
      </table>
    </div>
  </Fragment>
);

DataTable.propTypes = {
  /**
   * An array of column information objects which include name, label, render function, sortable,
   * sorted
   */
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      render: PropTypes.func.isRequired,
      sortable: PropTypes.bool,
      sorted: PropTypes.oneOf(['ascend', 'descend']),
    }),
  ).isRequired,
  /**
   * An array of data objects to include an id-like attribute (specified with the idKey prop)
   */
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  /**
   * A boolean to indicate that the rows are selectable
   */
  selectable: PropTypes.bool,
  /**
   * An object that holds the row ids which have been selected
   */
  selectedRows: PropTypes.shape({}),
  /**
   * A callback for when a row has been selected
   */
  onSelect: PropTypes.func,
  /**
   * A callback for when a sortable header has been clicked
   */
  onHeaderClick: PropTypes.func,
  /**
   * Specifies which attribute of a data array entry will serve as the unique id
   */
  idKey: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

DataTable.defaultProps = {
  selectedRows: {},
  onSelect: () => {},
  onHeaderClick: () => {},
  idKey: 'id',
  selectable: false,
  children: null,
};

export default DataTable;
