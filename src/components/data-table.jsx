import React from 'react';
import PropTypes from 'prop-types';
import withDataLoader from './data-loader';

import '../styles/components/data-table.scss';

export const DENSITY_COMPACT = Symbol('DENSITY_COMPACT');
export const DENSITY_NORMAL = Symbol('DENSITY_NORMAL');

const sharedPropTypes = {
  /**
   * Flag which indicates rows should be selectable with an input box.
   */
  selectable: PropTypes.bool,
  /**
   * An array of objects which specifies attributes about each column of your data. Each object has
   *  label, name and render attributes.
   */
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
      ]),
      name: PropTypes.string.isRequired,
      render: PropTypes.func.isRequired,
    })
  ).isRequired,
  /**
   * Table fixed layout
   */
  fixedLayout: PropTypes.bool,
};

const sharedDefaultProps = {
  selectable: false,
  fixedLayout: false,
};

const DataTableHead = ({ selectable, columns, onHeaderClick }) => (
  <thead className="data-table__header">
    <tr className="data-table__row">
      {selectable && (
        <th
          key="selectable-column"
          className="data-table__header-cell data-table__header-cell--checkbox"
        >
          {' '}
        </th>
      )}
      {columns.map((column) => {
        let className = 'data-table__header-cell ';
        let onClick;
        const { sorted, name, label, sortable } = column;
        if (sortable) {
          onClick = () => onHeaderClick(column.name);
          if (sorted) {
            className +=
              column.sorted === 'ascend'
                ? 'data-table__header-cell--ascend'
                : 'data-table__header-cell--descend';
          } else {
            className += 'data-table__header-cell--sortable';
          }
        }
        return (
          <th
            key={name}
            className={className}
            onClick={onClick}
            style={{ width: column.width ? column.width : 'auto' }}
          >
            {label}
          </th>
        );
      })}
    </tr>
  </thead>
);

DataTableHead.propTypes = {
  ...sharedPropTypes,
  onHeaderClick: PropTypes.func,
};

DataTableHead.defaultProps = {
  ...sharedDefaultProps,
  onHeaderClick: () => null,
};

const getCellClassName = (index, selectable, isSelected) => {
  let className = 'data-table__cell ';
  if (index % 2 === 1) {
    className += 'data-table__cell--odd ';
  }
  if (selectable && isSelected) {
    className += 'data-table__cell--selected';
  }
  return className;
};

const DataTableBody = ({
  data,
  columns,
  onSelect,
  selected,
  getIdKey,
  selectable,
  fixedLayout,
}) => (
  <tbody className="data-table__table__body">
    {data.map((row, index) => {
      const id = getIdKey(row);
      const isSelected = selected.includes(id);
      const className = getCellClassName(index, selectable, isSelected);
      return (
        <tr key={id}>
          {selectable && (
            <td key={`${id}-select-column`} className={className}>
              <input
                type="checkbox"
                onChange={() => onSelect(id)}
                aria-label={id}
                checked={isSelected}
              />
            </td>
          )}
          {columns.map((column) => (
            <td
              key={`${id}-${column.name}`}
              className={`${className} ${
                fixedLayout ? 'data-table__cell--ellipsis' : ''
              }`}
            >
              {column.render(row)}
            </td>
          ))}
        </tr>
      );
    })}
  </tbody>
);

DataTableBody.propTypes = {
  ...sharedPropTypes,
  /**
   * The data to be displayed
   */
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  /**
   * A function that returns a unique ID for each of the data objects. Defaults to return the "id" attribute.
   */
  getIdKey: PropTypes.func,
  /**
   * A callback function that is called whenever a user selects a row. The row ID is returned upon
   * callback.
   */
  onSelect: PropTypes.func.isRequired,
  /**
   * An object which indicates which rows have been selected by the user.
   */
  selected: PropTypes.arrayOf(PropTypes.string),
};

DataTableBody.defaultProps = {
  selected: [],
  getIdKey: ({ id }) => id,
};

const DataTable = ({
  data,
  columns,
  onSelect,
  selected,
  getIdKey,
  selectable,
  onHeaderClick,
  density,
  propsForTable,
  fixedLayout,
}) => (
  <table
    className={`data-table ${
      density === DENSITY_COMPACT ? 'data-table--compact' : ''
    } ${
      propsForTable && propsForTable.className
        ? ` ${propsForTable.className}`
        : ''
    } ${fixedLayout ? 'data-table--fixed' : ''}`}
    {...propsForTable}
  >
    <DataTableHead
      selectable={selectable}
      columns={columns}
      onHeaderClick={onHeaderClick}
    />
    <DataTableBody
      data={data}
      columns={columns}
      onSelect={onSelect}
      selected={selected}
      getIdKey={getIdKey}
      selectable={selectable}
      fixedLayout={fixedLayout}
    />
  </table>
);

DataTable.propTypes = {
  ...DataTableHead.propTypes,
  ...DataTableBody.propTypes,
  /**
   * Display density of the table (default is DENSITY_NORMAL)
   */
  density: PropTypes.oneOf([DENSITY_COMPACT, DENSITY_NORMAL]),
  /**
   * Optional props
   */
  propsForTable: PropTypes.arrayOf(PropTypes.any),
};

DataTable.defaultProps = {
  ...sharedDefaultProps,
  ...DataTableBody.defaultProps,
  density: DENSITY_NORMAL,
  propsForTable: null,
};

export default withDataLoader(DataTable);
