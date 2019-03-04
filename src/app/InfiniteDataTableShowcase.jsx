import React, { Component } from 'react';
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
      render: row => <span>{row.fieldValue1.value}</span>,
      sortable: true,
    },
    {
      label: 'Column 2',
      name: 'col2',
      render: row => <span>{row.fieldValue2.value}</span>,
      sorted: 'ascend',
      sortable: true,
    },
  ],
  idKey: 'accessionId',
  data: [
    {
      accessionId: 'blah1',
      fieldValue1: {
        value: 'Some data 1',
      },
      fieldValue2: {
        value: 'Some data 2',
      },
    },
    {
      accessionId: 'blah2',
      fieldValue1: {
        value: 'Some data A',
      },
      fieldValue2: {
        value: 'Some data B',
      },
    },
    {
      accessionId: 'blah3',
      fieldValue1: {
        value: 'Some data α',
      },
      fieldValue2: {
        value: 'Some data β',
      },
    },
  ],
};

class InfiniteDataTableShowcaseContent extends Component {
  constructor(props) {
    super(props);
    this.state = { a: 1 };
  }

  render() {
    return <InfiniteDataTable {...propData} />;
  }
}

const InfiniteDataTableShowcase = () => (
  <DefaultPageLayout title="Franklin - Data Table" content=<InfiniteDataTableShowcaseContent /> />
);

export default InfiniteDataTableShowcase;
