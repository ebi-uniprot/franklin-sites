import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import withDataLoader from './data-loader';
import '../styles/components/data-table.scss';

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
      label: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      render: PropTypes.func.isRequired,
    })
  ).isRequired,
  /**
   * A callback function that is called whenever a user clicks the header. The column name is
   * returned upon callback.
   */
};

const sharedDefaultProps = {
  selectable: false,
};

const DataTableHead = ({ selectable, columns, onHeaderClick }) => (
  <thead className="data-table__table__header">
    <tr className="data-table__table__header__row">
      {selectable && (
        <th
          key="selectable-column"
          className="data-table__table__header__row__cell"
        >
          {' '}
        </th>
      )}
      {columns.map(column => {
        let className = 'data-table__table__header__row__cell ';
        let onClick;
        const { sorted, name, label, sortable } = column;
        if (sortable) {
          onClick = () => onHeaderClick(column.name);
          if (sorted) {
            className +=
              column.sorted === 'ascend'
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
  let className = 'data-table__table__body__cell ';
  if (index % 2 === 1) {
    className += 'data-table__table__body__cell--odd ';
  }
  if (selectable && isSelected) {
    className += 'data-table__table__body__cell--selected';
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
}) => (
  <tbody className="data-table__table__body">
    {data.map((row, index) => {
      const id = getIdKey(row);
      const isSelected = !!selected[id];
      const className = getCellClassName(index, selectable, isSelected);
      return (
        <tr key={id}>
          {selectable && (
            <td key={`${id}-select-column`} className={className}>
              <input
                type="checkbox"
                onChange={() => onSelect(id)}
                checked={isSelected}
              />
            </td>
          )}
          {columns.map(column => (
            <td key={`${id}-${column.name}`} className={className}>
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
  selected: PropTypes.objectOf(PropTypes.bool),
};

DataTableBody.defaultProps = {
  selected: {},
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
}) => (
  <Fragment>
    <table className="data-table__table">
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
      />
    </table>
  </Fragment>
);

DataTable.propTypes = {
  ...DataTableHead.propTypes,
  ...DataTableBody.propTypes,
};

DataTable.defaultProps = {
  ...sharedDefaultProps,
  ...DataTableBody.defaultProps,
};

export default withDataLoader(DataTable);
