import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Card from './card';
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
    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.loadMoreDataIfNeeded();
  }

  componentDidUpdate(prevProps, prevState) {
    const { data } = this.props;
    const { data: prevData } = prevProps;
    if (data.length > prevData.length) {
      this.setState({ loading: false }, this.loadMoreDataIfNeeded);
    }
  }

  shouldLoadMoreData() {
    const { data, totalNumberDataPoints } = this.props;
    const { loading } = this.state;
    const isScrollable = DataList.isScrollable(this.myRef.current);
    return !isScrollable && !loading && data.length < totalNumberDataPoints;
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
    const { onLoadMoreData, totalNumberDataPoints, data } = this.props;
    const { loading } = this.state;
    const isBottom = DataList.isScrolledToBottom(e.target);
    if (isBottom && !loading && data.length < totalNumberDataPoints) {
      this.setState({ loading: true });
      onLoadMoreData();
    }
  }

  render() {
    const { data, loadingComponent } = this.props;
    const { loading } = this.state;
    const cardNodes = data.map(({ id, content }) => <Card key={id}>{content}</Card>);
    return (
      <div className="data-list__wrapper">
        <div className="data-list__inner" ref={this.myRef} onScroll={this.handleScroll}>
          {data.length > 0 && cardNodes}
          {(loading || data.length === 0) && loadingComponent}
        </div>
      </div>
    );
  }
}

export default DataList;
