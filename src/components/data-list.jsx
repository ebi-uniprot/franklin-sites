import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Card from './card';
import '../styles/components/data-list.scss';

class DataList extends Component {
  static isScrolledToBottom(target) {
    const { scrollHeight, scrollTop, clientHeight } = target;
    console.log(scrollHeight, scrollTop, clientHeight);
    return scrollHeight - Math.ceil(scrollTop) === clientHeight;
  }

  static isScrollable(target) {
    const { scrollHeight, clientHeight } = target;
    console.log(scrollHeight, clientHeight);
    return scrollHeight > clientHeight;
  }

  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = { loading: false };
    console.log(props.data);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.loadMoreDataIfNeeded();
  }

  componentDidUpdate(prevProps) {
    console.log(this.myRef);
    console.log('isScrolledToBottom', DataList.isScrolledToBottom(this.myRef.current));
    const { data } = this.props;
    const { data: prevData } = prevProps;
    console.log(prevData.length);
    if (data.length > prevData.length) {
      this.setState({ loading: false }, this.loadMoreDataIfNeeded());
    }
  }

  shouldLoadMoreData() {
    const { data, totalNumberDataPoints } = this.props;
    const { loading } = this.state;
    const isScrollable = DataList.isScrollable(this.myRef.current);
    console.log(!isScrollable, !loading, data.length > 0, data.length < totalNumberDataPoints);
    return !isScrollable && !loading && data.length > 0 && data.length < totalNumberDataPoints;
  }

  loadMoreDataIfNeeded() {
    const { onLoadMoreRows } = this.props;
    if (this.shouldLoadMoreData()) {
      console.log('it should load more rows?');
      this.setState({ loading: true }, onLoadMoreRows());
    }
  }

  handleScroll(e) {
    const { onLoadMoreRows, totalNumberDataPoints, data } = this.props;
    const { loading } = this.state;
    const isBottom = DataList.isScrolledToBottom(e.target);
    if (isBottom && !loading && data.length < totalNumberDataPoints) {
      this.setState({ loading: true });
      onLoadMoreRows();
    }
  }

  render() {
    const { data, loadingComponent } = this.props;
    const { loading } = this.state;
    const cardNodes = data.map(({ id, content }) => <Card key={id}>{content}</Card>);
    console.log('loading', loading);
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
