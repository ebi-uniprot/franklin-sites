import React from 'react';
// import PropTypes from 'prop-types';

import '../styles/components/data-table.scss';

const DataTableHtml = ({
  columns, data, onHeaderClick, selectable, selected, onSelect,
}) => (
  <div>
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
              if (column.sortable) {
                onClick = () => onHeaderClick(column.name);
                if (column.sorted) {
                  className
                    += column.sorted === 'ascend'
                      ? 'data-table__table__header__row__cell--ascend'
                      : 'data-table__table__header__row__cell--descend';
                } else {
                  className += 'data-table__table__header__row__cell--sortable';
                }
              }
              return (
                <th key={column.name} className={className} onClick={onClick}>
                  {column.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="data-table__table__body">
          {data.map((row) => {
            let className = 'data-table__table__body__cell ';
            if (selectable && !!selected[row.id]) {
              className += 'data-table__table__body__cell--selected';
            }
            return (
              <tr key={row.id}>
                {selectable && (
                  <td key={`${row.id}-select-column`} className={className}>
                    <input
                      type="checkbox"
                      onChange={() => onSelect(row.id)}
                      checked={!!selected[row.id]}
                    />
                  </td>
                )}
                {columns.map(column => (
                  <td key={`${row.id}-${column.name}`} className={className}>
                    {column.render(row)}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>
);

// DataTableHtml.propTypes = {
//   /**
//    * The tile title
//    */
//   title: PropTypes.string.isRequired,
//   /**
//    * The tile description. Short and snappy.
//    */
//   description: PropTypes.string,
//   /**
//    * The namespace, which decides the colour
//    */
//   namespace: PropTypes.string,
// };

// Tile.defaultProps = {
//   description: 'This is a short description of what the resource is/provides.',
//   namespace: '',
// };

export default DataTableHtml;
