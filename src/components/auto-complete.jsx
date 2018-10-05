import React, { Component, Fragment } from 'react';
import '../../dist/components/treeSelect.css';
import '../../dist/components/dropdown.css';
import '../../dist/components/auto-complete.css';

class AutoComplete extends Component {
  constructor(props) {
    super(props);
    const { data } = this.props
    this.state = {
      textInputValue: '',
      showDropdown: false,
      hoverIndex: -1,
      data,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  buildOptions(data, substringToHighlight) {
    return (
      <ul className={open ? 'open' : ''}>
        {data.map((node, index) => (
          <li key={node.label}>
            <span
              onClick={e => this._handleNodeClick(node, e)}
              className={this.state.hoverIndex === index ? 'hover' : ''}
            >
              {!!substringToHighlight ? this.highlightSubstring(node.label, substringToHighlight) : node.label}
            </span>
          </li>
        ))}
      </ul>
    );
  }

  _handleNodeClick(node, e) {
    console.log('in handleNodeClick');
      // this.setState({node.value})
      // this.toggleTreeSelect();
    
  }

  handleOnKeyDown(event) {
    if(event.key == 'Enter') {
      console.log('enter press here! ')
    }
    else if(event.key == 'ArrowUp') {
      console.log('ArrowUp press here! ')
      let { hoverIndex } = this.state;
      hoverIndex = Math.max(-1, hoverIndex - 1)
      this.setState({hoverIndex})
    }
    else if(event.key == 'ArrowDown') {
      console.log('ArrowDown press here! ')
      let { hoverIndex, data, textInputValue } = this.state;
      const options = this.filterOptions(data, textInputValue);
      hoverIndex = Math.min(options.length - 1, hoverIndex + 1)
      this.setState({hoverIndex})
    }
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  render() {
    const { textInputValue, showDropdown, data } = this.state;
    return (
      <div className="dropdown">
        <form onSubmit={this.handleSubmit} >
          <input type="text" value={textInputValue} onChange={this.handleChange} onKeyDown={this.handleOnKeyDown} />
        </form>
        <div className={showDropdown ? 'autcomplete-menu dropdown-menu-open' : 'autcomplete-menu'}>
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
