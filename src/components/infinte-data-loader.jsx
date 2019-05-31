import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/components/data-list.scss';

class InfiniteDataLoader extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.shouldLoadMoreData = this.shouldLoadMoreData.bind(this);
    this.loadMoreDataIfNeeded = this.loadMoreDataIfNeeded.bind(this);
    this.isScrolledToBottom = this.isScrolledToBottom.bind(this);
    this.isScrollable = this.isScrollable.bind(this);
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
    const isScrollable = this.isScrollable(this.ref.current);
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

  isScrolledToBottom() {
    const { scrollHeight, scrollTop, clientHeight } = this.ref.current;
    return scrollHeight - Math.ceil(scrollTop) === clientHeight;
  }

  isScrollable() {
    const { scrollHeight, clientHeight } = this.ref.current;
    return scrollHeight > clientHeight;
  }

  handleScroll() {
    const { onLoadMoreData, totalNumberDataPoints, children } = this.props;
    const { loading } = this.state;
    const isBottom = this.isScrolledToBottom();
    if (isBottom && !loading && children.length < totalNumberDataPoints) {
      this.setState({ loading: true }, onLoadMoreData);
    }
  }

  render() {
    const { loadingComponent, children } = this.props;
    const { loading } = this.state;
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

InfiniteDataLoader.propTypes = {
  totalNumberDataPoints: PropTypes.number.isRequired,
  loadingComponent: PropTypes.element,
  onLoadMoreData: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  selectedRows: PropTypes.shape({}),
};

InfiniteDataLoader.defaultProps = {
  selectedRows: {},
  loadingComponent: <h4>Loading...</h4>,
};

export default InfiniteDataLoader;
