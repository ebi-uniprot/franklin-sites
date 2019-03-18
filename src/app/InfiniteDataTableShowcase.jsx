import React, { Component } from 'react';
import loremIpsum from 'lorem-ipsum';
import v1 from 'uuid';
import DefaultPageLayout from './layout/DefaultPageLayout';
import InfiniteDataTable from '../components/infinite-data-table';

const propData = {
  selectable: true,
  fixedColumnCount: 0,
  fixedRowCount: 1,
  showHeader: true,
  showRowNumbers: true,
  numberResultsPerRequest: 10,
  totalNumberRows: 30,
  columns: [
    {
      label: 'Column 1',
      name: 'col1',
      render: row => <span>{row.col1.value}</span>,
      sortable: true,
      width: 200,
      sorted: 'ascend',
    },
    {
      label: 'Column 2',
      name: 'col2',
      render: row => <span>{row.col2.value}</span>,
      width: 300,
    },
    {
      label: 'Column 3',
      name: 'col3',
      render: row => <span>{row.col3.value}</span>,
      sortable: true,
      width: 300,
    },
    {
      label: 'Column 4',
      name: 'col4',
      render: row => <span>{row.col4.value}</span>,
      sortable: true,
      width: 300,
    },
    {
      label: 'Column 5',
      name: 'col5',
      render: row => <span>{row.col5.value}</span>,
      sortable: false,
      width: 300,
    },
  ],
  idKey: 'accessionId',
};

class InfiniteDataTableShowcaseContent extends Component {
  generatingDataRows = false;

  constructor(props) {
    super(props);
    this.state = { data: [], selectedRows: {} };
    this.onSelect = this.onSelect.bind(this);
  }

  static onHeaderClick(columnName) {
    console.log(columnName);
  }

  onSelect(rowId) {
    const { selectedRows: prevSelectedRows } = this.state;
    console.log(rowId, 'selected');
    if (rowId in prevSelectedRows) {
      const { [rowId]: value, ...selectedRows } = prevSelectedRows;
      this.setState({ selectedRows });
    } else {
      prevSelectedRows[rowId] = true;
      this.setState({ selectedRows: prevSelectedRows });
    }
  }

  generateDataRows(sleepDuration = 2) {
    const {
      columns, idKey, numberResultsPerRequest, totalNumberRows,
    } = this.props;
    const { data } = this.state;
    if (this.generatingDataRows) {
      return;
    }
    this.generatingDataRows = true;
    const moreData = Array(Math.min(numberResultsPerRequest, totalNumberRows - data.length))
      .fill(null)
      .map(() => {
        const dataPoint = { [idKey]: v1() };
        columns.forEach((column) => {
          dataPoint[column.name] = {
            value: loremIpsum({
              sentenceLowerBound: 2,
              sentenceUpperBound: 30,
            }),
          };
        });
        return dataPoint;
      });
    setTimeout(() => {
      this.setState({ data: [...data, ...moreData] });
      this.generatingDataRows = false;
    }, sleepDuration * 1000);
  }

  render() {
    const { selectedRows, data } = this.state;
    const {
      selectable,
      columns,
      idKey,
      fixedColumnCount,
      fixedRowCount,
      showRowNumbers,
      totalNumberRows,
      showHeader,
      numberResultsPerRequest,
    } = this.props;
    return (
      <InfiniteDataTable
        selectable={selectable}
        selectedRows={selectedRows}
        onSelect={this.onSelect}
        onHeaderClick={InfiniteDataTableShowcaseContent.onHeaderClick}
        onLoadMoreRows={() => this.generateDataRows()}
        columns={columns}
        idKey={idKey}
        data={data}
        fixedColumnCount={fixedColumnCount}
        fixedRowCount={fixedRowCount}
        showRowNumbers={showRowNumbers}
        totalNumberRows={totalNumberRows}
        showHeader={showHeader}
      />
    );
  }
}

const InfiniteDataTableShowcase = () => (
  <DefaultPageLayout
    title="Franklin - Data Table"
    content=<InfiniteDataTableShowcaseContent {...propData} />
  />
);

export default InfiniteDataTableShowcase;
