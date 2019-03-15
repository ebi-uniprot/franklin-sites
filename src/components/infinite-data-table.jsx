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

const defaultWidth = 200;
const defaultHeight = 30;
const minHeight = 30;

class InfiniteDataTable extends Component {
  cache = new CellMeasurerCache({
    fixedWidth: true,
    defaultHeight,
    minHeight,
  });

  constructor(props) {
    super(props);
    this.handleHeaderKeyPress = this.handleHeaderKeyPress.bind(this);
    this.getColumnWidth = this.getColumnWidth.bind(this);
    this.cellRenderer = this.cellRenderer.bind(this);
    this.isRowLoaded = this.isRowLoaded.bind(this);
  }

  static getRowClassName(index, selectedRows = false) {
    if (selectedRows) {
      return 'table-row-selected';
    }
    return index % 2 === 0 ? 'table-row-even' : 'table-row-odd';
  }

  static getSortableColumnClassName(column) {
    let className;
    if ('sorted' in column) {
      className = column.sorted === 'ascend' ? 'table-header-ascend' : 'table-header-descend';
    } else {
      className = 'table-header-sortable';
    }
    return `${className} table-head`;
  }

  static getSortableColumn(column, row, onHeaderClick, style) {
    return (
      <button
        style={style}
        type="button"
        key={column.name}
        className={InfiniteDataTable.getSortableColumnClassName(column)}
        onClick={() => onHeaderClick(column.name)}
      >
        {column.label}
      </button>
    );
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
    return columns.map(column => ({ label: column.label, render: x => x }));
  }

  getColumnWidth({ index }) {
    const { columns } = this.props;
    const column = columns[index];
    return 'width' in column ? column.width : defaultWidth;
  }

  // static getHeaderCell({

  // })

  static getCell({
    column,
    row,
    style,
    rowIndex,
    showHeader,
    idKey,
    rowSelectOnChange,
    onHeaderClick,
    selectedRows,
  }) {
    let className = 'table-data';
    let cellContent;
    let cellNode;

    if (showHeader && rowIndex === 0) {
      className += ' table-head';
    } else {
      className += rowIndex % 2 ? ' table-row-odd' : ' table-row-even';
    }
    if (column.name === 'select') {
      className += ' table-data-checkbox';
    }
    if (!row) {
      cellNode = (
        <div className={className} style={style}>
          loading...
        </div>
      );
    } else if ('render' in column) {
      if ('sortable' in column && showHeader && rowIndex === 0) {
        cellNode = InfiniteDataTable.getSortableColumn(column, row, onHeaderClick, style);
      } else {
        const id = row[idKey];
        const onChange = () => rowSelectOnChange(id);
        const checked = id in selectedRows;
        if (checked) {
          className += ' table-row-selected';
        }
        cellContent = column.render({
          row,
          rowIndex,
          onChange,
          checked,
        });
        cellNode = (
          <div className={className} style={style}>
            {cellContent}
          </div>
        );
      }
    } else {
      cellNode = (
        <div className={className} style={style}>
          <div className="warning">{`${column.name} has no render method`}</div>
        </div>
      );
    }
    return cellNode;
  }

  cellRenderer({
    columnIndex, rowIndex, key, parent, style,
  }) {
    const {
      showHeader,
      data,
      columns,
      selectedRows,
      idKey,
      rowSelectOnChange,
      onHeaderClick,
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
          rowSelectOnChange,
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
      numberResultsPerRequest,
      showRowNumbers,
    } = this.props;
    const rowCount = Math.min(totalNumberRows + showHeader, data.length + showHeader);
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
                  columnCount={columns.length + Number(showRowNumbers)}
                  width={width}
                  height={height}
                  columnWidth={this.getColumnWidth}
                  rowHeight={this.cache.rowHeight}
                  deferredMeasurementCache={this.cache}
                  fixedRowCount={1}
                  ref={registerChild}
                  rowCount={rowCount}
                  scrollToRow={data.length <= numberResultsPerRequest ? 0 : undefined}
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

InfiniteDataTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectable: PropTypes.bool,
  selectedRows: PropTypes.shape({}),
  onSelect: PropTypes.func,
  onHeaderClick: PropTypes.func,
  idKey: PropTypes.string,
};

InfiniteDataTable.defaultProps = {
  selectable: false,
  selectedRows: {},
  onSelect: () => {},
  onHeaderClick: () => {},
  idKey: 'id',
};

export default InfiniteDataTable;
