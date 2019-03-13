import React, { Component } from 'react';
import loremIpsum from 'lorem-ipsum';
import v1 from 'uuid';
import DefaultPageLayout from './layout/DefaultPageLayout';
import InfiniteDataTable from '../components/infinite-data-table';

const propData = {
  selectable: true,
  fixedColumnCount: 1,
  fixedRowCount: 1,
  showHeader: true,
  numberResultsPerRequest: 10,
  totalNumberRows: 400,
  showRowNumbers: true,
  columns: [
    {
      label: 'Column 1',
      name: 'col1',
      render: row => <span>{row.col1.value}</span>,
      sortable: true,
      width: 200,
    },
    {
      label: 'Column 2',
      name: 'col2',
      render: row => <span>{row.col2.value}</span>,
      sorted: 'ascend',
      sortable: true,
      width: 300,
    },
    {
      label: 'Column 3',
      name: 'col3',
      render: row => <span>{row.col3.value}</span>,
      sorted: 'ascend',
      sortable: true,
      width: 300,
    },
    {
      label: 'Column 4',
      name: 'col4',
      render: row => <span>{row.col4.value}</span>,
      sorted: 'ascend',
      sortable: true,
      width: 300,
    },
    {
      label: 'Column 5',
      name: 'col5',
      render: row => <span>{row.col5.value}</span>,
      sorted: 'ascend',
      sortable: true,
      width: 300,
    },
  ],
  idKey: 'accessionId',
};

class InfiniteDataTableShowcaseContent extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], selected: {} };
  }

  componentDidMount() {
    this.generateDataRows();
  }

  static onSelect(rowId) {
    console.log(rowId, 'selected');
  }

  static onHeaderClick(columnName) {
    console.log(columnName);
  }

  generateDataRows(numberWords = 10, sleepDuration = 2) {
    const {
      columns, idKey, numberResultsPerRequest, totalNumberRows,
    } = this.props;
    const { data } = this.state;
    console.log(columns, idKey, numberResultsPerRequest, totalNumberRows);
    const moreData = Array(Math.min(numberResultsPerRequest, totalNumberRows - data.length))
      .fill(null)
      .map(() => {
        const dataPoint = { [idKey]: v1() };
        columns.forEach((column) => {
          dataPoint[column.name] = {
            value: loremIpsum({
              sentenceLowerBound: 1,
              sentenceUpperBound: 100,
            }),
          };
        });
        return dataPoint;
      });
    setTimeout(() => {
      this.setState({ data: [...data, ...moreData] });
    }, sleepDuration * 1000);
  }

  render() {
    const { selected, data } = this.state;
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
    console.log(data.length);
    return (
      <InfiniteDataTable
        selectable={selectable}
        selected={selected}
        onSelect={InfiniteDataTableShowcaseContent.onSelect}
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
        numberResultsPerRequest={numberResultsPerRequest}
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
