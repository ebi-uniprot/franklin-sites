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
    const { data, totalNumberDataPoints } = this.props;
    const { loading } = this.state;
    const isScrollable = DataList.isScrollable(this.myRef.current);
    console.log(loading);
    if (!isScrollable && !loading && data.length > 0 && data.length < totalNumberDataPoints) {
      console.log('laod more data');
    } else {
      console.log('do not load more data');
    }
  }

  componentDidUpdate(prevProps) {
    console.log(this.myRef);
    console.log('isScrolledToBottom', DataList.isScrolledToBottom(this.myRef.current));
    const { data } = this.props;
    const { data: prevData } = prevProps;
    console.log(prevData.length);
    if (data.length > prevData.length) {
      this.setState({ loading: false });
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

    return (
      <div className="data-list" ref={this.myRef} onScroll={this.handleScroll}>
        {data.length > 0 && cardNodes}
        {(loading || data.length === 0) && loadingComponent}
      </div>
    );
  }
}

export default DataList;
