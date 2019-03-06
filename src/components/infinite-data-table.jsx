import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  CellMeasurer,
  CellMeasurerCache,
  MultiGrid,
  AutoSizer,
  InfiniteLoader,
} from 'react-virtualized';

const defaultWidth = 200;
const resultsTableRowIndex = {
  label: '#',
  name: 'resultsTableRowIndex',
  render: (row, index) => index,
};

class InfiniteDataTable extends Component {
  cache = new CellMeasurerCache({
    fixedWidth: true,
    defaultHeight: 60,
    // minHeight: 60,
  });

  constructor(props) {
    super(props);
    this.handleHeaderKeyPress = this.handleHeaderKeyPress.bind(this);
    this.getColumnWidth = this.getColumnWidth.bind(this);
    this.cellRenderer = this.cellRenderer.bind(this);
    this.isRowLoaded = this.isRowLoaded.bind(this);
  }

  static getRowClassName(index, selected = false) {
    if (selected) {
      return 'table-row-selected';
    }
    return index % 2 === 0 ? 'table-row-even' : 'table-row-odd';
  }

  static getSortableColumnClassName(column) {
    if ('sorted' in column) {
      return column.sorted === 'ascend' ? 'table-header-ascend' : 'table-header-descend';
    }
    return 'table-header-sortable';
  }

  handleHeaderKeyPress(event, columnName) {
    const { onHeaderClick } = this.props;
    if (event.key === 'Enter') {
      onHeaderClick(columnName);
    }
  }

  cellRenderer({
    columnIndex, rowIndex, key, parent, style,
  }) {
    let { columns } = this.props;
    const {
      data, fixedRowCount, fixedColumnCount, showHeader, showRowNumbers,
    } = this.props;
    let className = '';
    let cellContent;

    if (showRowNumbers) {
      columns = [resultsTableRowIndex, ...columns];
    }

    if (fixedColumnCount && columnIndex < fixedColumnCount) {
      className += ' frozen-column';
    }

    if (fixedRowCount && rowIndex < fixedRowCount) {
      className += ' frozen-row';
    }

    const ri = rowIndex - Number(showHeader);
    const column = columns[columnIndex];
    if (ri === -1) {
      cellContent = 'label' in column ? <b>{column.label}</b> : `${columnIndex} has no label`;
    } else {
      const row = data[ri];
      if (!className.includes('frozen-column')) {
        className += ri % 2 ? ' table-row-odd' : ' table-row-even';
      }
      if (!row) {
        cellContent = 'loading...';
      } else if ('render' in column) {
        cellContent = column.render(row, rowIndex);
      } else {
        cellContent = <div className="warning">{`${columnIndex} has no render method`}</div>;
      }
    }
    // console.log(style);
    return (
      <CellMeasurer
        cache={this.cache}
        columnIndex={columnIndex}
        key={key}
        parent={parent}
        rowIndex={ri}
      >
        <div style={style}>{cellContent}</div>
      </CellMeasurer>
    );
  }

  getColumnWidth({ index }) {
    let { columns } = this.props;
    const { showRowNumbers } = this.props;
    if (showRowNumbers) {
      columns = [resultsTableRowIndex, ...columns];
    }
    const column = columns[index];
    return 'width' in column ? column.width : defaultWidth;
  }

  isRowLoaded({ index }) {
    const { data, showRowNumbers } = this.props;
    console.log(index, !!data[index]);
    return !!data[index];
  }

  render() {
    const {
      columns,
      data,
      selectable = false,
      selected = {},
      onSelect,
      onHeaderClick,
      idKey,
      onLoadMoreRows,
      showHeader,
      fixedColumnCount,
      fixedRowCount,
      totalNumberRows,
      numberResultsPerRequest,
      showRowNumbers,
    } = this.props;
    const rowCount = Math.min(
      totalNumberRows + Number(showHeader),
      data.length + numberResultsPerRequest - 1 + Number(showHeader),
    );
    console.log(rowCount, totalNumberRows, data.length);
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
              <MultiGrid
                cellRenderer={this.cellRenderer}
                columnCount={columns.length + Number(showRowNumbers)}
                width={width}
                height={height}
                // columnWidth={this.getColumnWidth}
                columnWidth={300}
                rowHeight={this.cache.rowHeight}
                deferredMeasurementCache={this.cache}
                // fixedColumnCount={fixedColumnCount}
                // fixedRowCount={fixedRowCount}
                ref={registerChild}
                rowCount={rowCount}
                scrollToRow={data.length <= numberResultsPerRequest ? 0 : undefined}
                onSectionRendered={({ rowStartIndex, rowStopIndex }) => onRowsRendered({
                  startIndex: rowStartIndex,
                  stopIndex: rowStopIndex,
                })
                }
              />
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
  selected: PropTypes.shape({}),
  onSelect: PropTypes.func,
  onHeaderClick: PropTypes.func,
  idKey: PropTypes.string,
};

InfiniteDataTable.defaultProps = {
  selectable: false,
  selected: {},
  onSelect: () => {},
  onHeaderClick: () => {},
  idKey: 'id',
};

export default InfiniteDataTable;
