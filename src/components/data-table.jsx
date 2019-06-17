import React, {
  useState, useRef, useEffect, Fragment,
} from 'react';
import PropTypes from 'prop-types';
import {
  checkLoadMoreItems,
  checkOnDataLoad,
  checkOnLoadMoreItems,
} from './utils/scroll-data-loader';
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

const LoadingRow = ({ columns, selectable }) => (
  <tr key="loading-row">
    {selectable && <td key="loading-select-column" className="data-table__table__body__cell" />}
    {columns.map(column => (
      <td key={`loading-${column.name}`} className="data-table__table__body__cell">
        Loading...
      </td>
    ))}
  </tr>
);

LoadingRow.propTypes = {
  selectable: PropTypes.bool,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      render: PropTypes.func.isRequired,
    }),
  ).isRequired,
};

LoadingRow.defaultProps = {
  selectable: false,
};

const DataTableBody = ({
  data, columns, onSelect, selected, idKey, selectable, loading,
}) => (
  <tbody className="data-table__table__body">
    {data.map((row) => {
      const { [idKey]: id } = row;
      const isSelected = !!selected[id];
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
    })}
    {loading && <LoadingRow {...{ columns, selectable }} />}
  </tbody>
);

const DataTable = ({
  onLoadMoreItems,
  data,
  hasMoreData,
  columns,
  onSelect,
  selected,
  idKey,
  selectable,
  onHeaderClick,
}) => {
  const [loading, setLoading] = useState(false);
  const [loadMoreItems, setLoadMoreItems] = useState(false);
  const ref = useRef();

  useEffect(
    () => checkOnDataLoad(hasMoreData, setLoading, onLoadMoreItems, setLoadMoreItems, ref),
    [data],
  );

  useEffect(() => checkOnLoadMoreItems(loadMoreItems, setLoading, onLoadMoreItems), [
    loadMoreItems,
  ]);

  return (
    <Fragment>
      <div className="data-table__cover" />
      <div
        className="data-table__container"
        onScroll={() => checkLoadMoreItems(loading, hasMoreData, ref, setLoadMoreItems)}
        ref={ref}
      >
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
              loading,
            }}
          />
        </table>
      </div>
    </Fragment>
  );
};

DataTable.propTypes = {
  /**
   * Callback to request more items if user scrolled to the bottom of the scroll-container or if
   * the scroll-container isn't scrollable yet because not enough items have been loaded yet.
   */
  onLoadMoreItems: PropTypes.func.isRequired,
  /**
   * The component which will hold the items and is scrolled over.
   */
  // scrollContainer: PropTypes.element,
  /**
   * A boolean to indicate that the parent has more items to provide.
   */
  hasMoreData: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  idKey: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.instanceOf(Object),
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

DataTable.defaultProps = {
  onHeaderClick: () => null,
  idKey: 'id',
  selected: {},
  selectable: false,
};

export default DataTable;
