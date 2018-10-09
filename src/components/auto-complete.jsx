import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../dist/components/treeSelect.css';
import '../../dist/components/dropdown.css';
import '../../dist/components/auto-complete.css';
import AutoCompleteItem from './auto-complete-item';
import findLastSubstringIgnoreCase from '../utils';

class AutoComplete extends Component {
  static filterOptions(items, query) {
    return items.filter(item => findLastSubstringIgnoreCase(item.label, query) >= 0);
  }

  constructor(props) {
    super(props);
    const { data } = this.props;
    this.state = {
      textInputValue: '',
      showDropdown: false,
      hoverIndex: -1,
      data,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNodeClick = this.handleNodeClick.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({
      showDropdown: !!value.trim(),
      textInputValue: value,
      hoverIndex: -1,
    });
  }

  isValidChoice(string) {
    const { data } = this.state;
    return data.some(x => x.label.toLowerCase() === string.toLowerCase().trim());
  }

  buildOptions(data, substringToHighlight, hoverIndex) {

    return (
      <ul>
        {data.map((item, index) => (
          <AutoCompleteItem
            item={item}
            active={hoverIndex === index}
            substringToHighlight={substringToHighlight}
            key={item.label}
            handleOnClick={this.handleNodeClick}
          />
        ))}
      </ul>
    );
  }

  handleNodeClick(item) {
    this.setState({
      hoverIndex: -1,
      showDropdown: false,
      textInputValue: item.label,
    });
  }

  handleOnKeyDown(event) {
    if (event.key === 'ArrowUp') {
      let { hoverIndex } = this.state;
      if (hoverIndex <= 0) {
        hoverIndex = -1;
      } else {
        hoverIndex -= 1;
        // this.handleShow(hoverIndex);
      }
      this.setState({ hoverIndex });
    } else if (event.key === 'ArrowDown') {
      let { hoverIndex } = this.state;
      const { data, textInputValue } = this.state;
      const options = AutoComplete.filterOptions(data, textInputValue);
      hoverIndex = Math.min(options.length - 1, hoverIndex + 1);
      this.setState({ hoverIndex });
      // this.handleShow(hoverIndex);
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const {
      hoverIndex,
      data,
      textInputValue,
      showDropdown,
    } = this.state;
    const { onSelect } = this.props;
    let selectedValue = textInputValue;
    if (showDropdown && hoverIndex >= 0) {
      const options = AutoComplete.filterOptions(data, textInputValue);
      const chosen = options[hoverIndex];
      selectedValue = chosen.label;
      this.setState({
        hoverIndex: -1,
        showDropdown: false,
        textInputValue: selectedValue,
      });
    }
    onSelect(selectedValue);
  }

  render() {
    const {
      textInputValue,
      showDropdown,
      data,
      hoverIndex,
    } = this.state;
    return (
      <div className="dropdown">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={textInputValue} onChange={this.handleChange} onKeyDown={this.handleOnKeyDown} />
        </form>
        <div className={showDropdown ? 'autcomplete-menu dropdown-menu-open' : 'autcomplete-menu'}>
          {this.buildOptions(
            AutoComplete.filterOptions(data, textInputValue),
            textInputValue,
            hoverIndex,
          )}
        </div>
      </div>
    );
  }
}

AutoComplete.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default AutoComplete;
