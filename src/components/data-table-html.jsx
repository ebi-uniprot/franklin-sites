import React from 'react';
// import PropTypes from 'prop-types';

import '../styles/components/data-table.scss';

const DataTableHtml = ({ columns, data }) => (
  <div>
    <div className="data-table__cover" />
    <div className="data-table__container">
      <table className="data-table__table">
        <thead className="data-table__table__header">
          <tr className="data-table__table__header__row">
            {columns.map(column => (
              <th key={column.name} className="data-table__table__header__row__cell">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr key={row.id}>
              {columns.map(column => (
                <td key={`${row.id}-${column.name}`} className="data-table__table__body__cell">
                  {column.render(row)}
                </td>
              ))}
            </tr>
          ))}
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
