import React, { Component } from 'react';
import DefaultPageLayout from './layout/DefaultPageLayout';
import DataList from '../components/data-list';
import { getLipsumData } from './common/lipsum';

const idKey = 'id';

class DataListDemoContent extends Component {
  generatingData = false;

  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.generateData = this.generateData.bind(this);
    this.generateData();
  }

  generateData(sleepDuration = 1) {
    const { data } = this.state;
    if (this.generatingData) {
      return;
    }
    this.generatingData = true;
    // const numberDataPoints = Math.min(numberResultsPerRequest, totalNumberRows - data.length);
    const moreData = getLipsumData({
      keys: ['content'],
      idKey,
      numberDataPoints: 14,
    });
    setTimeout(() => {
      this.setState({ data: [...data, ...moreData] });
      this.generatingData = false;
    }, sleepDuration * 1000);
  }

  render() {
    const { data } = this.state;
    console.log(data);
    return (
      <div className="data-list">
        <DataList
          data={data}
          idKey={idKey}
          onLoadMoreRows={() => this.generateData()}
          totalNumberDataPoints={50}
          loadingComponent={<h4>Loading...</h4>}
        />
      </div>
    );
  }
}

const DataListDemo = () => (
  <DefaultPageLayout title="Franklin - Data Table" content=<DataListDemoContent /> />
);

export default DataListDemo;
