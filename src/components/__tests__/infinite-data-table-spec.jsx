import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { InfiniteDataTableCore } from '../infinite-data-table';

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

  test('static method getSortableHeaderCell should return a button with key "col2" and call onHeaderClick on click', () => {
    const onHeaderClick = jest.fn();
    const wrapper = shallow(
      InfiniteDataTableCore.getSortableHeaderCell({
        column: columns[1],
        onHeaderClick,
        style: {},
      }),
    );
    expect(wrapper.type()).toBe('button');
    expect(wrapper.key()).toBe('col2');
    wrapper.simulate('click');
    expect(onHeaderClick).toHaveBeenCalled();
  });

  test('static method getHeaderCell should return an element with text "Column 1" and have "table-head table-header" as className', () => {
    const wrapper = shallow(
      InfiniteDataTableCore.getHeaderCell({
        column: columns[0],
        onHeaderClick: jest.fn(),
        style: {},
      }),
    );
    expect(wrapper.text()).toBe('Column 1');
    expect(wrapper.hasClass('table-head table-header')).toBe(true);
  });

  test('static method getLoadingCell should element with text "Loading..." and "foo" as className', () => {
    const wrapper = shallow(
      InfiniteDataTableCore.getLoadingCell({
        className: 'foo',
        style: {},
      }),
    );
    expect(wrapper.text()).toBe('Loading...');
    expect(wrapper.hasClass('foo')).toBe(true);
  });

  test('static method getNumberCell should return component with correct row number and "foo" as className', () => {
    const wrapper = shallow(
      InfiniteDataTableCore.getNumberCell({
        className: 'foo',
        style: {},
        rowIndex: 100,
        showHeader: true,
      }),
    );
    expect(wrapper.text()).toBe('100');
    expect(wrapper.hasClass('foo')).toBe(true);
  });

  test('static method getNoRenderCell should return component with correct warning text and "table-row-warning" as className', () => {
    const wrapper = shallow(
      InfiniteDataTableCore.getNoRenderCell({
        style: {},
        column: columns[0],
      }),
    );
    expect(wrapper.text()).toBe('col1 has no render method');
    expect(wrapper.hasClass('table-row-warning')).toBe(true);
  });

  test('static method getSelectCell should return component with correct className and respond to checkbox toggle with an onSelect call', () => {
    const onSelect = jest.fn();
    const wrapper = shallow(
      InfiniteDataTableCore.getSelectCell({
        id: 'blah1',
        onSelect,
        style: {},
        className: 'foo',
        selectedRows: { blah1: true },
      }),
    );
    expect(wrapper.hasClass('foo table-row-selected')).toBe(true);
    const inputNode = wrapper.children();
    expect(inputNode.type()).toBe('input');
    inputNode.simulate('change');
    expect(onSelect).toHaveBeenCalled();
  });

  test('isRowLoaded should be false when row is missing and true when row is present', () => {
    const wrapper = mount(<InfiniteDataTableCore {...props} />);
    expect(wrapper.instance().isRowLoaded({ index: 0 })).toEqual(true);
    expect(wrapper.instance().isRowLoaded({ index: 100 })).toEqual(false);
  });

  test('getColumnWidth should return correct column width and return default when index is not found', () => {
    const wrapper = mount(<InfiniteDataTableCore {...props} />);
    expect(wrapper.instance().getColumnWidth({ index: 0 })).toEqual(40);
    expect(wrapper.instance().getColumnWidth({ index: 100 })).toEqual(200);
  });

  test('should render', () => {
    const component = renderer.create(<InfiniteDataTableCore {...props} />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
