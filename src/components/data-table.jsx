import React from 'react';
import PropTypes from 'prop-types';
import DataTableCore from './data-table-core';

const NUMBER_COLUMN = {
  label: '#',
  numberColumn: true,
  width: 40,
};
const SELECT_COLUMN = {
  selectColumn: true,
  width: 40,
};

const DataTable = (props) => {
  // This functional component prepends the data and columns being passed into DataTableCore
  // based on consumer choices (ie showRowNumbers, selectable, showHeader).
  const {
    showRowNumbers, selectable, showHeader, data: inData, columns: inColumns,
  } = props;
  const data = showHeader ? [{}, ...inData] : [...inData];
  let columns = [...inColumns];
  if (showRowNumbers) {
    columns = [NUMBER_COLUMN, ...columns];
  }
  if (selectable) {
    columns = [SELECT_COLUMN, ...columns];
  }
  return <DataTableCore {...props} data={data} columns={columns} />;
};

DataTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      width: PropTypes.number.isRequired,
    }),
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectable: PropTypes.bool,
  selectedRows: PropTypes.shape({}),
  onSelect: PropTypes.func,
  onHeaderClick: PropTypes.func,
  idKey: PropTypes.string,
  onLoadMoreRows: PropTypes.func.isRequired,
  fixedColumnCount: PropTypes.number,
  fixedRowCount: PropTypes.number,
  showRowNumbers: PropTypes.bool,
  totalNumberRows: PropTypes.number.isRequired,
  showHeader: PropTypes.bool,
};

DataTable.defaultProps = {
  selectable: false,
  selectedRows: {},
  onSelect: () => {},
  onHeaderClick: () => {},
  idKey: 'id',
  fixedColumnCount: 0,
  fixedRowCount: 0,
  showRowNumbers: false,
  showHeader: true,
};

export default DataTable;

/*
columns
(array of objects)
Specifies attributes about each column of your data. Objects have the shape:

{
  label: 'Column 1', // (string) The text which will be rendered
  name: 'col1', // (string) A unique ID for the column
  render: row => <span>{row.col1.value}</span>, // (function) The render function which pulls
   out the correct attribute from a row of data.
  sortable: true, // (boolean) A boolean flag to indicate if a column is sortable
  width: 200, // (number) The width of the column
}

data
(array of objects)
Each object represents a row of the data. Each object must include: attributes that have a
corresponding column with that name; a unique ID attribute whose name is given by idKey.


selectable
(boolean)
Flag which indicates rows should be selectable with an input box.


selectedRows
(object: rowId: true)
An object which indicates which rows have been selected by the user.


onSelect
(callback function with row ID returned)
A callback function that is called whenever a user selects a row. The row ID is returned upon
callback.

onHeaderClick
(callback function with column name returned)
A callback function that is called whenever a user clicks the header. The column name is returned
upon callback.

idKey
(string)
The name of an attribute in each of the data objects which serves as a unique ID

onLoadMoreRows
(callback function with no arguments)
When invoked by the InfiniteDataTable indicates more data needs to be fetched.

fixedColumnCount
(number)
The number of columns to fix (similar to freeze in excel) so that they are always visible no
matter where the user has scrolled.

fixedRowCount
(number)
The number of rows to fix (similar to freeze in excel) so that they are always visible no matter
where the user has scrolled.

showRowNumbers
(boolean)
Display row numbers flag.

totalNumberRows
(number)
The total number of rows of data that is expected. For example, if you a query returns 1,000,000
results but you only want to show the user 10 results at a time, totalNumberRows will be 1,000,000.

showHeader
(boolean)
Display header flag.
*/
