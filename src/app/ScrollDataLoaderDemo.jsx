import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DefaultPageLayout from './layout/DefaultPageLayout';
import ScrollDataLoader from '../components/scroll-data-loader';
import { getLipsumObjectArray } from './common/lipsum';
import ListItem from './ListItem';

const ScrollDataLoaderDemoProps = {
  idKey: 'id',
  numberDataPointsPerRequest: 5,
  totalNumberDataPoints: 50,
  sleepDuration: 0.75,
  numberInitialDataPoints: 1,
};

class ScrollDataLoaderDemoContent extends Component {
  static isSelected(selected, id) {
    return !!selected[id];
  }

  loadingData = false;

  constructor(props) {
    super(props);
    const { numberInitialDataPoints } = this.props;
    this.state = {
      data: numberInitialDataPoints > 0 ? this.generateData(numberInitialDataPoints) : [],
      selected: {},
    };
    this.generateData = this.generateData.bind(this);
    this.loadMoreData = this.loadMoreData.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(e, id) {
    const { selected } = this.state;
    selected[id] = !selected[id];
    this.setState({ selected });
  }

  generateData(numberElements) {
    const { idKey } = this.props;
    return getLipsumObjectArray({
      keys: ['content'],
      idKey,
      numberElements,
    });
  }

  loadMoreData() {
    const { data } = this.state;
    const { numberDataPointsPerRequest, totalNumberDataPoints, sleepDuration } = this.props;
    if (this.loadingData) {
      return null;
    }
    this.loadingData = true;
    const numberDataPoints = Math.min(
      numberDataPointsPerRequest,
      totalNumberDataPoints - data.length,
    );
    const moreData = this.generateData(numberDataPoints);
    return setTimeout(() => {
      this.loadingData = false;
      this.setState({ data: [...data, ...moreData] });
    }, sleepDuration * 1000);
  }

  render() {
    const { data, selected } = this.state;
    const { idKey, totalNumberDataPoints } = this.props;
    const listNodes = data.map(({ [idKey]: id, content }) => (
      <ListItem
        selected={ScrollDataLoaderDemoContent.isSelected(selected, id)}
        key={id}
        onSelect={e => this.handleSelect(e, id)}
      >
        <p>{content}</p>
      </ListItem>
    ));
    return (
      <div className="data-list">
        <h4 className="data-list__status">
          Number of data points loaded:
          {` ${data.length} / ${totalNumberDataPoints}`}
        </h4>
        <div className="data-list__wrapper">
          <ScrollDataLoader
            idKey={idKey}
            onLoadMoreData={this.loadMoreData}
            hasMoreData={listNodes.length < totalNumberDataPoints}
            items={listNodes}
          />
        </div>
      </div>
    );
  }
}

ScrollDataLoaderDemoContent.propTypes = {
  idKey: PropTypes.string.isRequired,
  numberInitialDataPoints: PropTypes.number.isRequired,
  sleepDuration: PropTypes.number.isRequired,
  totalNumberDataPoints: PropTypes.number.isRequired,
  numberDataPointsPerRequest: PropTypes.number.isRequired,
};

const ScrollDataLoaderDemo = () => (
  <DefaultPageLayout
    title="Franklin - Data Table"
    content=<ScrollDataLoaderDemoContent {...ScrollDataLoaderDemoProps} />
  />
);

export default ScrollDataLoaderDemo;
