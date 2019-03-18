import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import InfiniteDataTable from '../infinite-data-table';

Enzyme.configure({ adapter: new Adapter() });

describe('DataTable component', () => {
  const columns = [
    {
      label: 'Column 1',
      name: 'col1',
      render: row => <span>{row.fieldValue1.value}</span>,
      width: 40,
    },
    {
      label: 'Column 2',
      name: 'col2',
      render: row => <span>{row.fieldValue2.value}</span>,
      sorted: 'ascend',
      sortable: true,
      width: 40,
    },
  ];
  const data = [
    {
      id: 'blah1',
      fieldValue1: {
        value: 'Some data 1',
      },
      fieldValue2: {
        value: 'Some data 2',
      },
    },
    {
      id: 'blah2',
      fieldValue1: {
        value: 'Some data A',
      },
      fieldValue2: {
        value: 'Some data B',
      },
    },
  ];

  const props = {
    selectable: true,
    fixedColumnCount: 0,
    fixedRowCount: 1,
    showHeader: true,
    showRowNumbers: true,
    numberResultsPerRequest: 10,
    totalNumberRows: 30,
    idKey: 'accessionId',
    onLoadMoreRows: () => {},
    columns,
    data,
  };

  test('should render', () => {
    const component = renderer.create(<InfiniteDataTable {...props} />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
