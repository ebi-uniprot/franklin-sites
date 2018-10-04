import React, { Component } from 'react';
import '../../dist/components/treeSelect.css';
import { flatTreeData } from '../app/common/tree-data';


class AutoComplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      data: flatTreeData,
      showDropdown: false
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  filterOptions(items, query) {
    const queryLower = query.toLowerCase();
    return items.filter(item => item.label.toLowerCase().includes(queryLower));
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({ showDropdown: !!value });
    this.setState({ value });
  }

  buildOptions(data) {
    return (
      <ul className={open ? 'open' : ''}>
        {data.map(node => (
          <li key={node.label}>
            <span>
              {node.label}
            </span>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={(e) => this.handleChange(e)} />
        <div className="tree-select">
          <div
            className={this.state.showDropdown ? 'tree-select-menu tree-select-open' : 'tree-select-menu'}
          >
            {this.buildOptions(this.filterOptions(this.state.data, this.state.value))}
          </div>
        </div>
      </form>
    );
  }
}

AutoComplete.defaultProps = {
  data: [],
};

export default AutoComplete;
