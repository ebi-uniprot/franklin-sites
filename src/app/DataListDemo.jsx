import React, { Component, Fragment } from 'react';
import DefaultPageLayout from './layout/DefaultPageLayout';
import DataList from '../components/data-list';
import { getLipsumData } from './common/lipsum';
import ListItem from './ListItem';

const DataListDemoProps = {
  idKey: 'id23',
  numberDataPointsPerRequest: 10,
  totalNumberDataPoints: 50,
  sleepDuration: 1,
  numberInitialDataPoints: 10,
  selectable: true,
  loadingComponent: <h4>Loading...</h4>,
};

class DataListDemoContent extends Component {
  loadingData = false;

  static isSelected(selected, id) {
    return !!selected[id];
  }

  constructor(props) {
    super(props);
    const { numberInitialDataPoints, idKey, contentKey } = this.props;
    this.state = {
      data: numberInitialDataPoints > 0 ? this.generateData(numberInitialDataPoints) : [],
      selected: {},
    };
    this.generateData = this.generateData.bind(this);
    this.loadMoreData = this.loadMoreData.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(id) {
    const { selected } = this.state;
    selected[id] = !selected[id];
    console.log(selected);
    this.setState({ selected });
  }

  generateData(numberDataPoints) {
    const { idKey, contentKey, selectable } = this.props;
    let data = getLipsumData({
      keys: ['content'],
      idKey,
      numberDataPoints,
    });
    if (selectable) {
      data = data.map(({ [idKey]: id, content }) => ({
        [idKey]: id,
        content: (
          <div style={{ display: 'flex' }}>
            <div style={{ width: '1.5em' }}>
              <input type="checkbox" onChange={() => this.handleSelect(id)} />
            </div>
            <p style={{ flex: 1 }}>{content}</p>
          </div>
        ),
      }));
    }
    return data;
  }

  loadMoreData() {
    const { data } = this.state;
    const { numberDataPointsPerRequest, totalNumberDataPoints, sleepDuration } = this.props;
    if (this.loadingData) {
      return;
    }
    this.loadingData = true;
    const numberDataPoints = Math.min(
      numberDataPointsPerRequest,
      totalNumberDataPoints - data.length,
    );
    const moreData = this.generateData(numberDataPoints);
    setTimeout(() => {
      this.loadingData = false;
      this.setState({ data: [...data, ...moreData] });
    }, sleepDuration * 1000);
  }

  render() {
    const { data, selected } = this.state;
    const {
      idKey, totalNumberDataPoints, loadingComponent, sleepDuration,
    } = this.props;
    const childNodes = data.map(({ [idKey]: id, content }) => (
      <ListItem
        selected={DataListDemoContent.isSelected(selected, id)}
        key={id}
        onSelect={() => this.handleSelect(id)}
      >
        {id}
      </ListItem>
    ));
    return (
      <Fragment>
        <p>
          Number of data points loaded:
          {data.length}
        </p>
        <div className="data-list">
          <DataList
            idKey={idKey}
            onLoadMoreData={this.loadMoreData}
            totalNumberDataPoints={totalNumberDataPoints}
            loadingComponent={loadingComponent}
          >
            {childNodes}
          </DataList>
        </div>
      </Fragment>
    );
  }
}

const DataListDemo = () => (
  <DefaultPageLayout
    title="Franklin - Data Table"
    content=<DataListDemoContent {...DataListDemoProps} />
  />
);

export default DataListDemo;
