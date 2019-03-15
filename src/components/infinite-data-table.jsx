import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  CellMeasurer,
  CellMeasurerCache,
  MultiGrid,
  AutoSizer,
  InfiniteLoader,
} from 'react-virtualized';
import '../styles/components/data-table.scss';

const defaultWidth = 200;

class InfiniteDataTable extends Component {
  cache = new CellMeasurerCache({
    fixedWidth: true,
    defaultHeight: 30,
    minHeight: 30,
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
        style={{
          ...style,
          width: column.width,
        }}
        type="button"
        key={column.name}
        className={InfiniteDataTable.getSortableColumnClassName(column)}
        onClick={() => onHeaderClick(column.name)}
        // onKeyPress={() => this.handleHeaderKeyPress(column.name)}
      >
        {column.label}
      </button>
    );
  }

  componentDidUpdate(prevProps) {
    const { data, columns } = this.props;
    const { data: prevData } = prevProps;
    for (
      let rowIndex = Math.max(0, prevData.length - 1);
      rowIndex <= data.length + 1;
      rowIndex += 1
    ) {
      for (let columnIndex = 0; columnIndex < columns.length; columnIndex += 1) {
        // console.log(rowIndex, columnIndex);
        this.cache.clear(rowIndex, columnIndex);
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

  cellRenderer({
    columnIndex, rowIndex, key, parent, style,
  }) {
    const {
      fixedRowCount,
      fixedColumnCount,
      firstRowIsHeader,
      showRowNumbers,
      data,
      columns,
      selectedRows,
      idKey,
      rowSelectOnChange,
      onHeaderClick,
    } = this.props;

    let className = 'table-data';
    let cellContent;
    let cellNode;
    const column = columns[columnIndex];
    const row = data[rowIndex];
    if (firstRowIsHeader && rowIndex === 0) {
      className += ' table-head';
    } else if (!className.includes('frozen-column')) {
      className += rowIndex % 2 ? ' table-row-odd' : ' table-row-even';
    }
    if (column.name === 'select' && rowIndex > 0) {
      className += ' table-data-checkbox';
    }
    if (!row) {
      cellNode = (
        <div
          className={className}
          style={{
            ...style,
            width: column.width,
          }}
        >
          loading...
        </div>
      );
    } else if ('render' in column) {
      if ('sortable' in column && firstRowIsHeader && rowIndex === 0) {
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
          <div
            className={className}
            style={{
              ...style,
              width: column.width,
            }}
          >
            {cellContent}
          </div>
        );
      }
    } else {
      cellNode = (
        <div
          className={className}
          style={{
            ...style,
            width: column.width,
          }}
        >
          <div className="warning">{`${columnIndex} has no render method`}</div>
        </div>
      );
    }
    return (
      <CellMeasurer
        cache={this.cache}
        columnIndex={columnIndex}
        key={key}
        width={column.width}
        parent={parent}
        rowIndex={rowIndex}
      >
        {cellNode}
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
      selectable = false,
      selectedRows = {},
      onSelect,
      onHeaderClick,
      idKey,
      onLoadMoreRows,
      firstRowIsHeader,
      fixedColumnCount,
      fixedRowCount,
      totalNumberRows,
      numberResultsPerRequest,
      showRowNumbers,
    } = this.props;
    const rowCount = Math.min(
      totalNumberRows + Number(firstRowIsHeader),
      data.length + Number(firstRowIsHeader),
      // data.length + numberResultsPerRequest + Number(firstRowIsHeader) - 1,
    );
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
              <div className="data-table">
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
