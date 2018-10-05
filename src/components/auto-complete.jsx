import React, { Component, Fragment } from 'react';
import '../../dist/components/treeSelect.css';
import '../../dist/components/dropdown.css';

class AutoComplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInputValue: '',
      data: this.props.data,
      showDropdown: false,
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  filterOptions(items, query) {
    return items.filter(item => this.findLastSubstringIgnoreCase(item.label, query) >= 0);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({
      showDropdown: !!value.trim(),
      textInputValue: value,
    });
  }

  findLastSubstringIgnoreCase(string, substring) {
    return string.toLowerCase().lastIndexOf(substring.toLowerCase());
  }

  highlightSubstring(string, substring) {
    const i = this.findLastSubstringIgnoreCase(string, substring);
    if (i < 0) return;
    let prestring = string.slice(0, i);
    let highlight = string.slice(i, i+substring.length);
    let poststring = string.slice(i+substring.length);
    return <Fragment>{prestring}<b>{highlight}</b>{poststring}</Fragment>;
  }

  buildOptions(data, highlightSubstring) {
    return (
      <ul className={open ? 'open' : ''}>
        {data.map(node => (
          <li key={node.label}>
            <span>
              {!!highlightSubstring ? this.highlightSubstring(node.label, highlightSubstring) : node.label}
            </span>
          </li>
        ))}
      </ul>
    );
  }
  render() {
    const { textInputValue, showDropdown, data } = this.state;
    return (
      <div className="dropdown">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={textInputValue} onChange={this.handleChange} />
        </form>
        <div className={showDropdown ? 'dropdown-menu dropdown-menu-open' : 'dropdown-menu'} style={{top:39, left:1}}>
          {this.buildOptions(this.filterOptions(data, textInputValue), textInputValue)}
        </div>
      </div>
    );
  }
}

AutoComplete.defaultProps = {
  data: [],
};

export default AutoComplete;
