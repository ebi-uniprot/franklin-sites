import React, { useRef, useState } from 'react';
// import PropTypes from 'prop-types';

import '../styles/components/data-table.scss';

const DataTableHtml = ({ columns, data }) => {
  const headerRef = useRef();
  const bodyRef = useRef();
  const [offset, setOffset] = useState(0);

  const handleBodyScroll = () => {
    const { scrollLeft } = bodyRef.current;
    setOffset(-scrollLeft);
  };

  return (
    <div className="outer-container">
      <div className="data-table__container">
        <div className="data-table__header__table" style={{ left: offset }} ref={headerRef}>
          <table>
            <thead>
              <tr>
                {columns.map(column => (
                  <th key={column.name} className="data-table__header__table__th">
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
          </table>
        </div>
        <div className="data-table__body__table" ref={bodyRef} onScroll={handleBodyScroll}>
          <table>
            <tbody>
              {data.map(row => (
                <tr key={row.id}>
                  {columns.map(column => (
                    <td key={`${row.id}-${column.name}`} className="data-table__body__table__td">
                      {column.render(row)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
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
