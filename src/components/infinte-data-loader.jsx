import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/components/data-list.scss';

class InfiniteDataLoader extends Component {
  constructor(props) {
    super(props);
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
    const { scrollHeight, clientHeight, scrollTop } = this.ref.current;
    const isScrollable = scrollHeight > clientHeight;
    const isBottom = scrollHeight - Math.ceil(scrollTop) === clientHeight;
    return (isBottom || !isScrollable) && !loading && children.length < totalNumberDataPoints;
  }

  loadMoreDataIfNeeded() {
    if (this.shouldLoadMoreData()) {
      this.setState({ loading: true }, () => {
        const { onLoadMoreData } = this.props;
        onLoadMoreData();
      });
    }
  }

  render() {
    const { loadingComponent, children } = this.props;
    const { loading } = this.state;
    return (
      <div className="data-list__wrapper">
        <div className="data-list__inner" ref={this.ref} onScroll={this.loadMoreDataIfNeeded}>
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
