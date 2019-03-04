import React, { Component, Fragment } from 'react';
import loremIpsum from 'lorem-ipsum';
import v1 from 'uuid';
import DefaultPageLayout from './layout/DefaultPageLayout';
import InfiniteDataTable from '../components/infinite-data-table';

const propData = {
  selectable: true,
  selected: { blah3: true },
  onSelect: (rowId) => {
    console.log(rowId, 'selected');
  },
  onHeaderClick: (columnName) => {
    console.log(columnName);
  },
  columns: [
    {
      label: 'Column 1',
      name: 'col1',
      render: row => <span>{row.col1.value}</span>,
      sortable: true,
    },
    {
      label: 'Column 2',
      name: 'col2',
      render: row => <span>{row.col2.value}</span>,
      sorted: 'ascend',
      sortable: true,
    },
  ],
  idKey: 'accessionId',
};

class InfiniteDataTableShowcaseContent extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.generateDataRows();
  }

  generateDataRows(numberDataPoints = 10, numberWords = 10, sleepDuration = 2) {
    const { columns, idKey } = this.props;
    const data = Array(numberDataPoints)
      .fill(null)
      .map(() => {
        const dataPoint = { [idKey]: v1() };
        columns.forEach((column) => {
          dataPoint[column.name] = { value: loremIpsum({ count: numberWords, units: 'words' }) };
        });
        return dataPoint;
      });
    setTimeout(() => {
      this.setState({ data });
    }, sleepDuration * 1000);
  }

  render() {
    const { data } = this.state;

    return (
      <Fragment>
        <button type="submit" className="button">
          Append more rows
        </button>
        <InfiniteDataTable {...this.props} data={data} />
      </Fragment>
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
