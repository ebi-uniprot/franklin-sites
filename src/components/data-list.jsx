import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/components/data-list.scss';

class DataList extends Component {
  static isScrolledToBottom(target) {
    const { scrollHeight, scrollTop, clientHeight } = target;
    return scrollHeight - Math.ceil(scrollTop) === clientHeight;
  }

  static isScrollable(target) {
    const { scrollHeight, clientHeight } = target;
    return scrollHeight > clientHeight;
  }

  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.shouldLoadMoreData = this.shouldLoadMoreData.bind(this);
    this.loadMoreDataIfNeeded = this.loadMoreDataIfNeeded.bind(this);
    this.state = { loading: false };
    this.ref = React.createRef();
  }

  componentDidMount() {
    this.loadMoreDataIfNeeded();
  }

  componentDidUpdate(prevProps) {
    const { children } = this.props;
    const { children: prevChildren } = prevProps;
    if (children.length > prevChildren.length) {
      this.setState({ loading: false }, this.loadMoreDataIfNeeded);
    }
  }

  shouldLoadMoreData() {
    const { children, totalNumberDataPoints } = this.props;
    const { loading } = this.state;
    const isScrollable = DataList.isScrollable(this.ref.current);
    return !isScrollable && !loading && children.length < totalNumberDataPoints;
  }

  loadMoreDataIfNeeded() {
    if (this.shouldLoadMoreData()) {
      this.setState({ loading: true }, () => {
        const { onLoadMoreData } = this.props;
        onLoadMoreData();
      });
    }
  }

  handleScroll(e) {
    const { onLoadMoreData, totalNumberDataPoints, children } = this.props;
    const { loading } = this.state;
    const isBottom = DataList.isScrolledToBottom(e.target);
    if (isBottom && !loading && children.length < totalNumberDataPoints) {
      this.setState({ loading: true }, onLoadMoreData);
    }
  }

  render() {
    const { loadingComponent, idKey, children } = this.props;
    const { loading } = this.state;
    console.log(loading || children.length === 0);
    return (
      <div className="data-list__wrapper">
        <div className="data-list__inner" ref={this.ref} onScroll={this.handleScroll}>
          {children.length > 0 && children}
          {(loading || children.length === 0) && loadingComponent}
        </div>
      </div>
    );
  }
}
// DataList.propTypes = {
//   idKey: PropTypes.string,
//   totalNumberDataPoints: PropTypes.number.isRequired,
//   loadingComponent: PropTypes.element,
//   onLoadMoreData: PropTypes.func.isRequired,
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       content: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
//     }),
//   ).isRequired,
//   selectable: PropTypes.bool,
//   selectedRows: PropTypes.shape({}),
//   onSelect: PropTypes.func,
// };

// DataList.defaultProps = {
//   idKey: 'id',
//   selectable: false,
//   selectedRows: {},
//   onSelect: () => {},
//   loadingComponent: <h4>Loading...</h4>,
// };

export default DataList;
