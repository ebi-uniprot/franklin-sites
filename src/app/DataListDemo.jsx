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
    console.log('here!!!!');
    const { data } = this.state;
    console.log(this.generatingData);
    if (this.generatingData) {
      return;
    }
    this.generatingData = true;
    // const numberDataPoints = Math.min(numberResultsPerRequest, totalNumberRows - data.length);
    const moreData = getLipsumData({
      keys: ['content'],
      idKey,
      numberDataPoints: 8,
    });
    setTimeout(() => {
      this.generatingData = false;
      this.setState({ data: [...data, ...moreData] });
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
