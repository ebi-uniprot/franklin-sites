import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  CellMeasurer,
  CellMeasurerCache,
  MultiGrid,
  AutoSizer,
  InfiniteLoader,
} from 'react-virtualized';
import { serializableDeepAreEqual } from '../utils';
import '../styles/components/data-table.scss';

const DEFAULT_WIDTH = 200;
const DEFAULT_HEIGHT = 30;
const MIN_HEIGHT = 30;
const NUMBER_COLUMN = {
  label: '#',
  numberColumn: true,
  width: 40,
};
const SELECT_COLUMN = {
  selectColumn: true,
  width: 40,
};

export const InfiniteDataTablePreprocessor = (props) => {
  // This functional component prepends the data and columns being passed into InfiniteDataTableCore
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
  return <InfiniteDataTableCore {...props} data={data} columns={columns} />;
};

export class InfiniteDataTableCore extends Component {
  cache = new CellMeasurerCache({
    fixedWidth: true,
    DEFAULT_HEIGHT,
    MIN_HEIGHT,
  });

  constructor(props) {
    super(props);
    this.getColumnWidth = this.getColumnWidth.bind(this);
    this.cellRenderer = this.cellRenderer.bind(this);
    this.isRowLoaded = this.isRowLoaded.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { data, columns } = this.props;
    const { data: prevData } = prevProps;
    if (!serializableDeepAreEqual(data, prevData)) {
      for (let rowIndex = prevData.length; rowIndex <= data.length + 1; rowIndex += 1) {
        for (let columnIndex = 0; columnIndex < columns.length; columnIndex += 1) {
          this.cache.clear(rowIndex, columnIndex);
        }
      }
    }
  }

  getHeader() {
    const { columns } = this.props;
    return columns.map(column => ({ label: column.label || '', render: x => x }));
  }

  getColumnWidth({ index }) {
    const { columns } = this.props;
    const column = columns[index];
    return column && column.width ? column.width : DEFAULT_WIDTH;
  }

  static getSortableHeaderCell({ column, onHeaderClick, style }) {
    let className = 'table-head ';
    if (column.sorted) {
      className += column.sorted === 'ascend' ? 'table-header-ascend' : 'table-header-descend';
    } else {
      className += 'table-header-sortable';
    }
    return (
      <button
        style={style}
        type="button"
        key={column.name}
        className={className}
        onClick={() => onHeaderClick(column.name)}
      >
        {column.label || ''}
      </button>
    );
  }

  static getHeaderCell({ column, onHeaderClick, style }) {
    if (column.sortable) {
      return InfiniteDataTableCore.getSortableHeaderCell({ column, onHeaderClick, style });
    }
    return (
      <div className="table-head table-header" style={style}>
        {column.label || ''}
      </div>
    );
  }

  static getLoadingCell({ className, style }) {
    return (
      <div className={className} style={style}>
        Loading...
      </div>
    );
  }

  static getSelectCell({
    id, onSelect, style, className, selectedRows,
  }) {
    const checked = id in selectedRows;
    return (
      <div className={`${className} ${checked && 'table-row-selected'}`} style={style}>
        <input type="checkbox" onChange={() => onSelect(id)} checked={id in selectedRows} />
      </div>
    );
  }

  static getNumberCell({
    style, className, rowIndex, showHeader,
  }) {
    return (
      <div className={className} style={style}>
        {rowIndex + 1 - showHeader}
      </div>
    );
  }

  static getNoRenderCell({ style, column }) {
    return (
      <div className="table-data table-row-warning" style={style}>
        {`${column.name} has no render method`}
      </div>
    );
  }

  static getCell({
    column,
    row,
    style,
    rowIndex,
    showHeader,
    idKey,
    onSelect,
    onHeaderClick,
    selectedRows,
  }) {
    if (showHeader && rowIndex === 0) {
      return InfiniteDataTableCore.getHeaderCell({
        column,
        onHeaderClick,
        style,
      });
    }

    let className = `table-data ${rowIndex % 2 ? 'table-row-odd' : 'table-row-even'}`;

    if (!row) {
      return InfiniteDataTableCore.getLoadingCell({ className, style });
    }

    if (column.selectColumn) {
      return InfiniteDataTableCore.getSelectCell({
        id: row[idKey],
        onSelect,
        selectedRows,
        className,
        style,
      });
    }

    const id = row[idKey];
    const checked = id in selectedRows;

    if (checked) {
      className += ' table-row-selected';
    }

    if (column.numberColumn) {
      return InfiniteDataTableCore.getNumberCell({
        style,
        column,
        className,
        rowIndex,
        showHeader,
      });
    }

    if (!('render' in column)) {
      return InfiniteDataTableCore.getNoRenderCell({ style, column });
    }

    return (
      <div className={`${className} ${checked && ' table-row-selected'}`} style={style}>
        {column.render(row)}
      </div>
    );
  }

  cellRenderer({
    columnIndex, rowIndex, key, parent, style,
  }) {
    const {
      showHeader, data, columns, selectedRows, idKey, onSelect, onHeaderClick,
    } = this.props;
    const { width } = columns[columnIndex];
    return (
      <CellMeasurer
        cache={this.cache}
        columnIndex={columnIndex}
        key={key}
        parent={parent}
        rowIndex={rowIndex}
      >
        {InfiniteDataTableCore.getCell({
          column: columns[columnIndex],
          row: data[rowIndex],
          style: { ...style, width },
          rowIndex,
          showHeader,
          idKey,
          onSelect,
          onHeaderClick,
          selectedRows,
        })}
      </CellMeasurer>
    );
  }

  isRowLoaded({ index }) {
    const { data } = this.props;
    return !!data[index];
  }

  render() {
    const {
      columns,
      data,
      onLoadMoreRows,
      showHeader,
      fixedColumnCount,
      fixedRowCount,
      totalNumberRows,
    } = this.props;
    const rowCount = showHeader + Math.min(totalNumberRows, data.length);
    return (
      <InfiniteLoader
        loadMoreRows={onLoadMoreRows}
        isRowLoaded={this.isRowLoaded}
        rowCount={rowCount}
        threshold={1}
      >
        {({ onRowsRendered, registerChild }) => (
          <AutoSizer>
            {({ width, height }) => (
              <div className="data-table-infinite">
                <MultiGrid
                  cellRenderer={this.cellRenderer}
                  columnCount={columns.length}
                  width={width || 100}
                  height={height || 100}
                  columnWidth={this.getColumnWidth}
                  rowHeight={this.cache.rowHeight}
                  deferredMeasurementCache={this.cache}
                  fixedRowCount={fixedRowCount}
                  fixedColumnCount={fixedColumnCount}
                  ref={registerChild}
                  rowCount={rowCount}
                  onSectionRendered={({ rowStartIndex, rowStopIndex }) => onRowsRendered({
                    startIndex: rowStartIndex,
                    stopIndex: rowStopIndex,
                  })
                  }
                />
              </div>
            )}
          </AutoSizer>
        )}
      </InfiniteLoader>
    );
  }
}

InfiniteDataTablePreprocessor.propTypes = {
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

InfiniteDataTablePreprocessor.defaultProps = {
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

InfiniteDataTableCore.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      width: PropTypes.number.isRequired,
    }),
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedRows: PropTypes.shape({}),
  onSelect: PropTypes.func,
  onHeaderClick: PropTypes.func,
  idKey: PropTypes.string,
  onLoadMoreRows: PropTypes.func.isRequired,
  fixedColumnCount: PropTypes.number,
  fixedRowCount: PropTypes.number,
  totalNumberRows: PropTypes.number.isRequired,
  showHeader: PropTypes.bool,
};

InfiniteDataTableCore.defaultProps = {
  selectedRows: {},
  onSelect: () => {},
  onHeaderClick: () => {},
  idKey: 'id',
  fixedColumnCount: 0,
  fixedRowCount: 0,
  showHeader: true,
};

export default InfiniteDataTablePreprocessor;

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
