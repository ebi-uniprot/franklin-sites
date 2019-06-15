import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/components/data-table.scss';

const scrollOffsetPercentage = 10;
const scrollOffsetFactor = 1 + scrollOffsetPercentage / 100;

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

  const isNotScrollable = () => {
    const { scrollHeight, offsetHeight } = ref.current;
    return scrollHeight <= offsetHeight * scrollOffsetFactor;
  };

  const isBottom = () => {
    const { scrollHeight, scrollTop, offsetHeight } = ref.current;
    return scrollHeight - Math.ceil(scrollTop) <= offsetHeight * scrollOffsetFactor;
  };

  const checkLoadMoreItems = () => {
    if (!loading && hasMoreData && isBottom()) {
      setLoadMoreItems(true);
    }
  };

  useEffect(() => {
    if (isNotScrollable() && hasMoreData) {
      setLoading(true);
      onLoadMoreItems();
    } else {
      setLoading(false);
      setLoadMoreItems(false);
    }
  }, [data]);

  useEffect(() => {
    if (loadMoreItems) {
      setLoading(true);
      onLoadMoreItems();
    }
  }, [loadMoreItems]);

  return (
    <div className="data-table__container" onScroll={checkLoadMoreItems} ref={ref}>
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
  scrollContainer: PropTypes.element,
  /**
   * An array of JSX elements which will populate the scrollContainer.
   */
  items: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired,
  /**
   * A boolean to indicate that the parent has more items to provide.
   */
  hasMoreData: PropTypes.bool.isRequired,
};

DataTable.defaultProps = {
  // scrollContainer: <div />,
};

export default DataTable;
