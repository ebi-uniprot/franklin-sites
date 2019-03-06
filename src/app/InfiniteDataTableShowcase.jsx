import React, { Component } from 'react';
import loremIpsum from 'lorem-ipsum';
import v1 from 'uuid';
import DefaultPageLayout from './layout/DefaultPageLayout';
import InfiniteDataTable from '../components/infinite-data-table';

const propData = {
  selectable: true,
  fixedColumnCount: 0,
  fixedRowCount: 0,
  showHeader: true,
  numberResultsPerRequest: 10,
  totalNumberRows: 20,
  showRowNumbers: true,
  columns: [
    {
      label: 'Column 1',
      name: 'col1',
      render: row => <span>{row.col1.value}</span>,
      sortable: true,
      width: 100,
    },
    {
      label: 'Column 2',
      name: 'col2',
      render: row => <span>{row.col2.value}</span>,
      sorted: 'ascend',
      sortable: true,
      width: 200,
    },
  ],
  idKey: 'accessionId',
};

class InfiniteDataTableShowcaseContent extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], selected: {} };
    this.generateDataRows();
  }

  static onSelect(rowId) {
    console.log(rowId, 'selected');
  }

  static onHeaderClick(columnName) {
    console.log(columnName);
  }

  generateDataRows(numberWords = 10, sleepDuration = 0) {
    const {
      columns, idKey, numberResultsPerRequest, totalNumberRows,
    } = this.props;
    const { data } = this.state;
    const moreData = Array(Math.min(numberResultsPerRequest, totalNumberRows - data.length))
      .fill(null)
      .map(() => {
        const dataPoint = { [idKey]: v1() };
        columns.forEach((column) => {
          dataPoint[column.name] = { value: loremIpsum({ count: numberWords, units: 'words' }) };
        });
        return dataPoint;
      });
    setTimeout(() => {
      this.setState({ data: [...data, ...moreData] });
    }, sleepDuration * 1000);
  }

  render() {
    const { selected } = this.state;
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
    const data = [
      {
        accessionId: '949e4f58-9d94-464d-bdcd-a0fb818dc5b5',
        col1: { value: 'officia aliquip consectetur eu cillum magna officia sit culpa in' },
        col2: { value: 'sunt occaecat culpa anim occaecat ut voluptate commodo officia ex' },
      },
      {
        accessionId: '32f9a14e-7b0b-40b8-9433-872020d62e70',
        col1: { value: 'id officia officia aute sit fugiat aliquip ad laborum elit' },
        col2: {
          value: 'cillum exercitation sint tempor consequat et ullamco commodo proident dolore',
        },
      },
      {
        accessionId: '2dbcfa84-a778-4e3f-911a-8ff78c1de4a9',
        col1: {
          value: 'laboris sit enim laborum nulla incididunt sit voluptate voluptate cupidatat',
        },
        col2: { value: 'ex ad non est occaecat adipisicing irure elit excepteur anim' },
      },
      {
        accessionId: 'e12462b2-0c2f-4350-894c-b2826281c4b6',
        col1: { value: 'ut laboris ullamco commodo anim commodo enim esse id do' },
        col2: {
          value: 'et nulla laboris voluptate irure consectetur occaecat deserunt proident in',
        },
      },
      {
        accessionId: 'edcdab5d-7c71-40ec-bcf8-65d483510c42',
        col1: { value: 'occaecat nulla duis aute labore ut reprehenderit sunt duis sit' },
        col2: { value: 'minim incididunt fugiat aute ut labore labore dolore eiusmod sit' },
      },
      {
        accessionId: '92d3c68d-17c7-4c79-b775-42681d681a41',
        col1: { value: 'officia quis magna voluptate magna adipisicing et elit voluptate minim' },
        col2: { value: 'aliqua cillum adipisicing ad tempor ullamco sunt aliquip esse qui' },
      },
      {
        accessionId: '2e521ff8-9d38-4bcb-88a5-f64a05f426c4',
        col1: {
          value:
            'consectetur consequat incididunt incididunt nostrud sit enim adipisicing dolor occaecat',
        },
        col2: { value: 'duis sunt minim deserunt ad consectetur cupidatat dolor ipsum ex' },
      },
      {
        accessionId: 'f0ffb9a4-ff67-46b7-88d1-21b364ccfffb',
        col1: { value: 'id labore occaecat magna proident consequat ex ex pariatur non' },
        col2: {
          value:
            'voluptate aliquip reprehenderit ut aliquip laboris aliquip occaecat adipisicing reprehenderit',
        },
      },
      {
        accessionId: 'ef0e763f-bc27-455a-b6bd-b6ed8e03a92a',
        col1: {
          value: 'id dolor velit cupidatat sint nostrud nulla deserunt reprehenderit fugiat',
        },
        col2: { value: 'nostrud non do deserunt do incididunt dolor ad minim veniam' },
      },
      {
        accessionId: '8c63c361-a698-4edd-9664-8a17dfbab2bb',
        col1: { value: 'adipisicing sit ut minim cupidatat mollit culpa minim cupidatat occaecat' },
        col2: { value: 'nulla voluptate eiusmod consequat cillum aliquip aliqua aliqua aute aute' },
      },
      {
        accessionId: 'fdbc6e62-cf9f-48bc-b9a7-e7abc61218a1',
        col1: { value: 'eu aute dolore enim et tempor pariatur amet do commodo' },
        col2: { value: 'labore adipisicing laboris aliqua excepteur fugiat tempor ea anim aute' },
      },
      {
        accessionId: 'b2a642b1-2867-4e95-960d-2cd3ab65d814',
        col1: { value: 'nisi est velit in eu est pariatur Lorem nisi laborum' },
        col2: { value: 'laborum occaecat aliqua occaecat minim mollit qui laborum ea nisi' },
      },
      {
        accessionId: '95dc5557-a467-4bf2-bd2a-c014e1610520',
        col1: { value: 'velit nisi reprehenderit anim sit culpa sit laborum incididunt laborum' },
        col2: { value: 'velit aliquip sit ad veniam non tempor ea veniam quis' },
      },
      {
        accessionId: 'bd08daca-43b1-45bf-8c20-828bf166100a',
        col1: { value: 'laborum eu eiusmod ea ea proident nulla sunt anim deserunt' },
        col2: { value: 'eu consectetur in sit dolore adipisicing qui dolore consequat ipsum' },
      },
      {
        accessionId: '15f81734-5271-4783-8f2e-749056aae537',
        col1: { value: 'elit dolore veniam laborum ipsum labore amet enim nostrud ut' },
        col2: { value: 'Lorem mollit ex sit ut aute aliquip exercitation sunt incididunt' },
      },
      {
        accessionId: '13437acf-75d5-4a6d-9e48-f9949c716726',
        col1: {
          value: 'ipsum commodo laboris cupidatat excepteur incididunt quis qui Lorem cillum',
        },
        col2: { value: 'incididunt fugiat officia elit proident Lorem nisi non in cupidatat' },
      },
      {
        accessionId: 'd26dc413-25d3-46e5-b5df-6a9bbbfca7ea',
        col1: { value: 'labore ad pariatur ex quis in est aute ipsum veniam' },
        col2: {
          value: 'non mollit exercitation enim incididunt magna mollit magna voluptate aliquip',
        },
      },
      {
        accessionId: '85e66729-8635-4142-a316-263243540fff',
        col1: { value: 'laboris culpa ad officia aliquip deserunt elit commodo ex ad' },
        col2: { value: 'consectetur ex do veniam velit fugiat fugiat magna laborum fugiat' },
      },
      {
        accessionId: '88b590b8-8093-4aca-8e65-24f5f809bfc7',
        col1: { value: 'sit cupidatat pariatur anim fugiat elit ullamco dolore Lorem tempor' },
        col2: { value: 'pariatur non duis Lorem pariatur eiusmod nostrud anim aliqua aliqua' },
      },
      {
        accessionId: '2867b132-4f7a-4cb2-ac5c-4c0e44eebf26',
        col1: { value: 'sint amet sint incididunt ea voluptate dolore enim incididunt minim' },
        col2: {
          value:
            'officia tempor excepteur eiusmod voluptate exercitation minim adipisicing sint reprehenderit',
        },
      },
    ];
    return (
      <div style={{ height: 2000 }}>
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
      </div>
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
