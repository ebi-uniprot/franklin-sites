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

const InfiniteDataTableWrapper = (props) => {
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
  return <InfiniteDataTable {...props} data={data} columns={columns} />;
};

class InfiniteDataTable extends Component {
  cache = new CellMeasurerCache({
    fixedWidth: true,
    DEFAULT_HEIGHT,
    MIN_HEIGHT,
  });

  constructor(props) {
    super(props);
    this.handleHeaderKeyPress = this.handleHeaderKeyPress.bind(this);
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
      return InfiniteDataTable.getSortableHeaderCell({ column, onHeaderClick, style });
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
        loading...
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
      return InfiniteDataTable.getHeaderCell({
        column,
        onHeaderClick,
        style,
      });
    }

    let className = `table-data ${rowIndex % 2 ? 'table-row-odd' : 'table-row-even'}`;

    if (!row) {
      return InfiniteDataTable.getLoadingCell({ className, style });
    }

    if (column.selectColumn) {
      return InfiniteDataTable.getSelectCell({
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
      return InfiniteDataTable.getNumberCell({
        style,
        column,
        className,
        rowIndex,
        showHeader,
      });
    }

    if (!('render' in column)) {
      return InfiniteDataTable.getNoRenderCell({ style, column });
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
        {InfiniteDataTable.getCell({
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

  handleHeaderKeyPress(event, columnName) {
    const { onHeaderClick } = this.props;
    if (event.key === 'Enter') {
      onHeaderClick(columnName);
    }
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

InfiniteDataTableWrapper.propTypes = {
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

InfiniteDataTableWrapper.defaultProps = {
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

InfiniteDataTable.propTypes = {
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

InfiniteDataTable.defaultProps = {
  selectedRows: {},
  onSelect: () => {},
  onHeaderClick: () => {},
  idKey: 'id',
  fixedColumnCount: 0,
  fixedRowCount: 0,
  showHeader: true,
};

export default InfiniteDataTableWrapper;
