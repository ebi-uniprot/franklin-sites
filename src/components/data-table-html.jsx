import React from 'react';
// import PropTypes from 'prop-types';

import '../styles/components/data-table.scss';

const DataTableHtml = ({ columns, data }) => {
  console.log(columns);
  console.log(data);
  return (
    <table className="data-table">
      <thead className="data-table__thead">
        <tr>
          {columns.map(column => (
            <th key={column.name} className="data-table__th">
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(row => (
          <tr key={row.id}>
            {columns.map(column => (
              <td key={`${row.id}-${column.name}`} className="data-table__td">
                {column.render(row)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

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
