import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import withDataLoader from './data-loader';
import '../styles/components/data-table.scss';

const DataTableHead = ({ selectable, columns, onHeaderClick }) => (
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
);

DataTableHead.propTypes = {
  selectable: PropTypes.bool,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      render: PropTypes.func.isRequired,
    }),
  ).isRequired,
  onHeaderClick: PropTypes.func,
};

DataTableHead.defaultProps = {
  onHeaderClick: () => null,
  selectable: false,
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
  data, columns, onSelect, selected, idKey, selectable,
}) => (
  <tbody className="data-table__table__body">
    {data.map((row, index) => {
      const { [idKey]: id } = row;
      const isSelected = !!selected[id];
      const className = getCellClassName(index, selectable, isSelected);
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
    })}
  </tbody>
);

const DataTable = ({
  data, columns, onSelect, selected, idKey, selectable, onHeaderClick,
}) => (
  <Fragment>
    <table className="data-table__table">
      <DataTableHead
        {...{
          selectable,
          columns,
          onHeaderClick,
        }}
      />
      <DataTableBody
        {...{
          data,
          columns,
          onSelect,
          selected,
          idKey,
          selectable,
        }}
      />
    </table>
  </Fragment>
);

DataTable.propTypes = {
  /**
   * The data to be displayed
   */
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  /**
   * The name of an attribute in each of the data objects which serves as a unique ID
   */
  idKey: PropTypes.string,
  /**
   * A callback function that is called whenever a user selects a row. The row ID is returned upon
   * callback.
   */
  onSelect: PropTypes.func.isRequired,
  /**
   * An object which indicates which rows have been selected by the user.
   */
  selected: PropTypes.instanceOf(Object),
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
    }),
  ).isRequired,
  /**
   * A callback function that is called whenever a user clicks the header. The column name is
   * returned upon callback.
   */
  onHeaderClick: PropTypes.func,
};

DataTable.defaultProps = {
  onHeaderClick: () => null,
  idKey: 'id',
  selected: {},
  selectable: false,
};

export default withDataLoader(DataTable);
