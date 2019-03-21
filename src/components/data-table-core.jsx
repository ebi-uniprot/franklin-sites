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

const DEFAULT_TABLE_WIDTH = 400;
const DEFAULT_TABLE_HEIGHT = 400;
const DEFAULT_COLUMN_WIDTH = 200;
const DEFAULT_ROW_HEIGHT = 30;
const MIN_ROW_HEIGHT = 30;

class DataTableCore extends Component {
  cache = new CellMeasurerCache({
    fixedWidth: true,
    DEFAULT_ROW_HEIGHT,
    MIN_ROW_HEIGHT,
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

  getColumnWidth({ index }) {
    const { columns } = this.props;
    const column = columns[index];
    return column && column.width ? column.width : DEFAULT_COLUMN_WIDTH;
  }

  static getSortableHeaderCell({ column, onHeaderClick, style }) {
    let className = 'data-table__head data-table__header ';
    if (column.sorted) {
      className
        += column.sorted === 'ascend' ? 'data-table__header--ascend' : 'data-table__header--descend';
    } else {
      className += 'data-table__header--sortable';
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
      return DataTableCore.getSortableHeaderCell({ column, onHeaderClick, style });
    }
    return (
      <div className="data-table__head data-table__header" style={style}>
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
      <div className={`${className} ${checked && 'data-table__row--selected'}`} style={style}>
        <input type="checkbox" onChange={() => onSelect(id)} checked={checked} />
      </div>
    );
  }

  static getRowCountCell({
    style, className, rowIndex, showHeader,
  }) {
    const headerRowCount = +showHeader;
    return (
      <div className={className} style={style}>
        {rowIndex + 1 - headerRowCount}
      </div>
    );
  }

  static getNoRenderCell({ style, column }) {
    return (
      <div className="data-table__data data-table__row--warning" style={style}>
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
      return DataTableCore.getHeaderCell({
        column,
        onHeaderClick,
        style,
      });
    }

    let className = `data-table__data ${
      rowIndex % 2 ? 'data-table__row--odd' : 'data-table__row--even'
    }`;

    if (!row) {
      return DataTableCore.getLoadingCell({ className, style });
    }

    if (column.selectColumn) {
      return DataTableCore.getSelectCell({
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
      className += ' data-table__row--selected';
    }

    if (column.numberColumn) {
      return DataTableCore.getRowCountCell({
        style,
        column,
        className,
        rowIndex,
        showHeader,
      });
    }

    if (!('render' in column)) {
      return DataTableCore.getNoRenderCell({ style, column });
    }

    return (
      <div className={className} style={style}>
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
        {DataTableCore.getCell({
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
    const headerRowCount = +showHeader;
    const rowCount = headerRowCount + Math.min(totalNumberRows, data.length);
    return (
      <InfiniteLoader
        loadMoreRows={onLoadMoreRows}
        isRowLoaded={this.isRowLoaded}
        rowCount={rowCount}
        threshold={1}
      >
        {({ onRowsRendered, registerChild }) => (
          <AutoSizer>
            {({ width: tableWidth, height: tableHeight }) => (
              <div className="data-table">
                <MultiGrid
                  cellRenderer={this.cellRenderer}
                  columnCount={columns.length}
                  width={tableWidth || DEFAULT_TABLE_WIDTH}
                  height={tableHeight || DEFAULT_TABLE_HEIGHT}
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

DataTableCore.propTypes = {
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

DataTableCore.defaultProps = {
  selectedRows: {},
  onSelect: () => {},
  onHeaderClick: () => {},
  idKey: 'id',
  fixedColumnCount: 0,
  fixedRowCount: 0,
  showHeader: true,
};

export default DataTableCore;
