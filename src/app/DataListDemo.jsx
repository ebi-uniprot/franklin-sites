import React, { Component, Fragment } from 'react';
import DefaultPageLayout from './layout/DefaultPageLayout';
import ScrollDataLoader from '../components/scroll-data-loader';
import { getLipsumObjectArray } from './common/lipsum';
import ListItem from './ListItem';

const DataListDemoProps = {
  idKey: 'id',
  numberDataPointsPerRequest: 5,
  totalNumberDataPoints: 50,
  sleepDuration: 0.75,
  numberInitialDataPoints: 1,
  selectable: true,
};

class DataListDemoContent extends Component {
  static isSelected(selected, id) {
    return !!selected[id];
  }

  loadingData = false;

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

  handleSelect(e, id) {
    const { selected } = this.state;
    selected[id] = !selected[id];
    this.setState({ selected });
  }

  generateData(numberElements) {
    const { idKey, contentKey, selectable } = this.props;
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
    setTimeout(() => {
      this.loadingData = false;
      this.setState({ data: [...data, ...moreData] });
    }, sleepDuration * 1000);
  }

  render() {
    const { data, selected } = this.state;
    const { idKey, totalNumberDataPoints, loadingComponent } = this.props;
    const listNodes = data.map(({ [idKey]: id, content }) => (
      <ListItem
        selected={DataListDemoContent.isSelected(selected, id)}
        key={id}
        onSelect={e => this.handleSelect(e, id)}
      >
        <p>{content}</p>
      </ListItem>
    ));
    return (
      <Fragment>
        <div className="data-list">
          <h4 className="data-list__status">
            Number of data points loaded:
            {` ${data.length}`}
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
      </Fragment>
    );
  }
}

// idKey: 'id23',
//   numberDataPointsPerRequest: 10,
//     totalNumberDataPoints: 50,
//       sleepDuration: 1,
//         numberInitialDataPoints: 10,
//           selectable: true,
//             loadingComponent: <h4>Loading...</h4> ,
// };

// DataListDemoContent.propTypes = {
//   idKey: PropTypes.element.isRequired,
//   selected: PropTypes.bool,
//   onSelect: PropTypes.func,
// };

// DataListDemoContent.defaultProps = {
//   selected: false,
//   onSelect: () => {},
// };

const DataListDemo = () => (
  <DefaultPageLayout
    title="Franklin - Data Table"
    content=<DataListDemoContent {...DataListDemoProps} />
  />
);

export default DataListDemo;
