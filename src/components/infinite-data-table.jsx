import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Column,
  Table,
  MultiGrid,
  CellMeasurer,
  CellMeasurerCache,
  AutoSizer,
  InfiniteLoader,
} from 'react-virtualized';
import v1 from 'uuid';
import 'react-virtualized/styles.css'; // only needs to be imported once
import '../styles/components/infinite-data-table.scss';

const defaultWidth = 200;
const resultsTableRowIndex = {
  label: '#',
  name: 'resultsTableRowIndex',
  render: (row, index) => index,
  width: 100,
};

class InfiniteDataTable extends Component {
  cache = new CellMeasurerCache({
    fixedWidth: true,
    defaultHeight: 30,
    minHeight: 30,
  });

  constructor(props) {
    super(props);
    this.handleHeaderKeyPress = this.handleHeaderKeyPress.bind(this);
    // this.getColumnWidth = this.getColumnWidth.bind(this);
    // this.cellRenderer = this.cellRenderer.bind(this);
    this.isRowLoaded = this.isRowLoaded.bind(this);
    this.setTableRef = this.setTableRef.bind(this);
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

  static getNumberColumn() {
    return (
      <Column
        key={v1()}
        label="#"
        dataKey="index"
        width={50}
        minWidth={50}
        cellDataGetter={columnData => columnData}
        cellRenderer={({ rowIndex }) => rowIndex + 1}
      />
    );
  }

  componentDidUpdate() {
    this.cache.clearAll();
    const { data } = this.props;
    for (let i = 0; i <= data.length; i += 1) {
      this.table.recomputeRowHeights(i);
    }
    this.cache.clearAll();
  }

  getTableWidth() {
    let { columns } = this.props;
    const { showRowNumbers } = this.props;
    if (showRowNumbers) {
      columns = [resultsTableRowIndex, ...columns];
    }
    const width = columns.reduce(
      (totalWidth, column) => totalWidth + column.width || defaultWidth,
      0,
    );
    return width;
  }

  getColumns() {
    const { columns, showRowNumbers } = this.props;
    const columnNodes = columns.map((column) => {
      let render;
      if (column.render) {
        render = row => (row ? column.render(row) : <span style={{ fontSize: 100 }}>loading...</span>);
      } else {
        render = () => <div className="warning">{`${column.label} has no render method`}</div>;
      }

      // const getContent = measure => {
      //   // store callback for later use
      //   this.measureCallbacks[index] = measure;
      //   return content;
      // };

      return (
        <Column
          key={v1()}
          label={column.label}
          dataKey={column.name}
          cellDataGetter={rowData => rowData}
          width={column.width}
          minWidth={column.width}
          // cellRenderer={({
          //   rowData, parent, dataKey, rowIndex, style,
          // }) => render(rowData)}
          cellRenderer={({
            rowData, parent, dataKey, rowIndex,
          }) => (
            <CellMeasurer
              cache={this.cache}
              columnIndex={0}
              key={dataKey}
              parent={parent}
              rowIndex={rowIndex}
            >
              <div
                style={{
                  overflow: 'normal',
                  whiteSpace: 'normal',
                }}
              >
                {render(rowData)}
              </div>
            </CellMeasurer>
          )}
        />
      );
      // return {
      //   label: columnName,
      //   name: columnName,
      //   render,
      //   sortable: columnName in SortableColumns,
      //   sorted: columnName === sort.column ? sort.direction : false,
      // };
    });
    return showRowNumbers ? [InfiniteDataTable.getNumberColumn(), ...columnNodes] : columnNodes;
  }

  handleHeaderKeyPress(event, columnName) {
    const { onHeaderClick } = this.props;
    if (event.key === 'Enter') {
      onHeaderClick(columnName);
    }
  }

  // cellRenderer({
  //   columnIndex, rowIndex, key, parent, style,
  // }) {
  //   let { columns } = this.props;
  //   const {
  //     data, fixedRowCount, fixedColumnCount, showHeader, showRowNumbers,
  //   } = this.props;
  //   let className = '';
  //   let cellContent;

  //   if (showRowNumbers) {
  //     columns = [resultsTableRowIndex, ...columns];
  //   }

  //   if (fixedColumnCount && columnIndex < fixedColumnCount) {
  //     className += ' frozen-column';
  //   }

  //   if (fixedRowCount && rowIndex < fixedRowCount) {
  //     className += ' frozen-row';
  //   }

  //   const ri = rowIndex - Number(showHeader);
  //   const column = columns[columnIndex];
  //   if (ri === -1) {
  //     cellContent = 'label' in column ? <b>{column.label}</b> : `${columnIndex} has no label`;
  //   } else {
  //     const row = data[ri];
  //     if (!className.includes('frozen-column')) {
  //       className += ri % 2 ? ' table-row-odd' : ' table-row-even';
  //     }
  //     if (!row) {
  //       cellContent = <span style={{ fontSize: 100 }}>loading...</span>;
  //     } else if ('render' in column) {
  //       cellContent = column.render(row, rowIndex);
  //     } else {
  //       cellContent = (
  //         <div style={{ fontSize: 100 }} className="warning">
  //           {`${columnIndex} has no render method`}
  //         </div>
  //       );
  //     }
  //   }
  //   return (
  //     <CellMeasurer
  //       cache={this.cache}
  //       columnIndex={columnIndex}
  //       key={key}
  //       parent={parent}
  //       rowIndex={ri}
  //     >
  //       <div
  //         style={{
  //           ...style,
  //           minWidth: column.width,
  //           // paddingBottom: 30,
  //           // paddingTop: 30,
  //         }}
  //       >
  //         {cellContent}
  //       </div>
  //     </CellMeasurer>
  //   );
  // }

  isRowLoaded({ index }) {
    const { data } = this.props;
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
      totalNumberRows,
      numberResultsPerRequest,
      showRowNumbers,
    } = this.props;
    const rowCount = Math.min(totalNumberRows, data.length + numberResultsPerRequest);
    console.log(this.cache);
    console.log(this.table);

    return (
      <InfiniteLoader
        loadMoreRows={onLoadMoreRows}
        isRowLoaded={this.isRowLoaded}
        rowCount={rowCount}
        threshold={1}
      >
        {({ onRowsRendered, registerChild }) => (
          <Table
            width={this.getTableWidth()}
            height={500}
            headerHeight={150}
            deferredMeasurementCache={this.cache}
            rowHeight={this.cache.rowHeight}
            ref={ref => this.setTableRef(ref, registerChild)}
            onRowsRendered={onRowsRendered}
            rowCount={rowCount}
            rowGetter={({ index }) => data[index]}
            scrollToIndex={data.length <= numberResultsPerRequest ? 0 : undefined}
          >
            {this.getColumns()}
          </Table>
        )}
      </InfiniteLoader>
    );
  }

  setTableRef(ref, registerChild) {
    this.table = ref;
    registerChild(ref);
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
