import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import DataTable from '../data-table';

Enzyme.configure({ adapter: new Adapter() });

describe('DataTable component', () => {
  const columns = [
    {
      label: 'Column 1',
      name: 'col1',
      render: row => <span>{row.fieldValue1.value}</span>,
    },
    {
      label: 'Column 2',
      name: 'col2',
      render: row => <span>{row.fieldValue2.value}</span>,
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
  test('should call onSelect on click', () => {
    const handleOnSelect = jest.fn();
    const wrapper = mount(
      <DataTable columns={columns} data={data} selectable onSelect={handleOnSelect} />,
    );
    wrapper.find('#blah1').simulate('change');
    expect(handleOnSelect).toHaveBeenCalled();
  });

  test('should render', () => {
    const component = renderer.create(<DataTable columns={columns} data={data} />).toJSON();

    expect(component).toMatchSnapshot();
  });
});
