import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DefaultPageLayout from './layout/DefaultPageLayout';
import DataTable from '../components/data-table';
import { getLipsumData } from './common/lipsum';

const propData = {
  selectable: true,
  fixedColumnCount: 0,
  fixedRowCount: 1,
  showHeader: true,
  showRowNumbers: true,
  numberResultsPerRequest: 10,
  totalNumberRows: 2000,
  idKey: 'accessionId',
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
};

class DataTableDemoContent extends Component {
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

  generateDataRows(sleepDuration = 1) {
    const {
      columns, idKey, numberResultsPerRequest, totalNumberRows,
    } = this.props;
    const { data } = this.state;
    if (this.generatingDataRows) {
      return;
    }
    this.generatingDataRows = true;
    const numberDataPoints = Math.min(numberResultsPerRequest, totalNumberRows - data.length);
    const moreData = getLipsumData({
      keys: columns.map(column => column.name),
      idKey,
      numberDataPoints,
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
    } = this.props;
    return (
      <DataTable
        selectable={selectable}
        selectedRows={selectedRows}
        onSelect={this.onSelect}
        onHeaderClick={DataTableDemoContent.onHeaderClick}
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

const DataTableDemo = () => (
  <DefaultPageLayout title="Franklin - Data Table" content=<DataTableDemoContent {...propData} /> />
);

DataTableDemoContent.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedRows: PropTypes.shape({}),
  idKey: PropTypes.string,
  fixedColumnCount: PropTypes.number,
  fixedRowCount: PropTypes.number,
  totalNumberRows: PropTypes.number.isRequired,
  showHeader: PropTypes.bool,
  numberResultsPerRequest: PropTypes.number.isRequired,
  showRowNumbers: PropTypes.bool,
  selectable: PropTypes.bool,
};

DataTableDemoContent.defaultProps = {
  selectedRows: {},
  onSelect: () => {},
  onHeaderClick: () => {},
  idKey: 'id',
  fixedColumnCount: 0,
  fixedRowCount: 0,
  showHeader: true,
  showRowNumbers: false,
  selectable: false,
};

export default DataTableDemo;
