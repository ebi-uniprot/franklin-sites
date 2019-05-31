import React, { Component, Fragment } from 'react';
import DefaultPageLayout from './layout/DefaultPageLayout';
import InfiniteDataLoader from '../components/infinte-data-loader';
import { getLipsumObjectArray } from './common/lipsum';
import ListItem from './ListItem';

const parameters = new Map();
parameters.set('totalNumberDataPoints', {
  text: 'Total number of datapoints',
  default: 50,
});
parameters.set('numberInitialDataPoints', {
  text: 'Number of datapoints intially loaded',
  default: 10,
});
parameters.set('numberDataPointsPerRequest', {
  text: 'Number of datapoints per request',
  default: 10,
});
parameters.set('selectable', {
  text: 'Each element is selectable',
  default: true,
});

const DataListDemoProps = {
  idKey: 'id23',
  numberDataPointsPerRequest: 10,
  totalNumberDataPoints: 50,
  sleepDuration: 1,
  numberInitialDataPoints: 3,
  selectable: true,
  loadingComponent: <h4>Loading...</h4>,
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
    const { idKey, totalNumberDataPoints, loadingComponent } = this.props;
    const childNodes = data.map(({ [idKey]: id, content }) => (
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
        <p>
          Number of data points loaded:
          {data.length}
        </p>
        <div className="data-list">
          <InfiniteDataLoader
            idKey={idKey}
            onLoadMoreData={this.loadMoreData}
            totalNumberDataPoints={totalNumberDataPoints}
            loadingComponent={loadingComponent}
          >
            {childNodes}
          </InfiniteDataLoader>
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
