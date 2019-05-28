import React, { Component, Fragment } from 'react';
import DefaultPageLayout from './layout/DefaultPageLayout';
import DataList from '../components/data-list';
import { getLipsumData } from './common/lipsum';

const props = {
  idKey: 'id',
  numberDataPointsPerRequest: 12,
  totalNumberDataPoints: 50,
  loadingComponent: <h4>Loading...</h4>,
  sleepDuration: 2,
  numberInitialDataPoints: 0,
};

class DataListDemoContent extends Component {
  generatingData = false;

  constructor(props) {
    super(props);
    const { numberInitialDataPoints, idKey } = this.props;
    console.log(numberInitialDataPoints);
    const data = numberInitialDataPoints > 0
      ? getLipsumData({
        keys: ['content'],
        idKey,
        numberDataPoints: numberInitialDataPoints,
      })
      : [];
    console.log(data);
    this.state = { data };
    this.generateData = this.generateData.bind(this);
    // this.generateData();
  }

  generateData() {
    const { data } = this.state;
    const {
      numberDataPointsPerRequest, totalNumberDataPoints, idKey, sleepDuration,
    } = this.props;
    if (this.generatingData) {
      return;
    }
    this.generatingData = true;
    const numberDataPoints = Math.min(
      numberDataPointsPerRequest,
      totalNumberDataPoints - data.length,
    );
    const moreData = getLipsumData({
      keys: ['content'],
      idKey,
      numberDataPoints,
    });
    setTimeout(() => {
      this.generatingData = false;
      this.setState({ data: [...data, ...moreData] });
    }, sleepDuration * 1000);
  }

  render() {
    const { data } = this.state;
    const {
      idKey, totalNumberDataPoints, loadingComponent, sleepDuration,
    } = this.props;
    return (
      <Fragment>
        <p>
          Number of data points loaded:
          {data.length}
        </p>
        <div className="data-list">
          <DataList
            data={data}
            idKey={idKey}
            onLoadMoreData={this.generateData}
            totalNumberDataPoints={totalNumberDataPoints}
            loadingComponent={loadingComponent}
          />
        </div>
      </Fragment>
    );
  }
}

const DataListDemo = () => (
  <DefaultPageLayout title="Franklin - Data Table" content=<DataListDemoContent {...props} /> />
);

export default DataListDemo;
