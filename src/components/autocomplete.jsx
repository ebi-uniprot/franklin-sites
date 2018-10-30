import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../dist/components/dropdown.css';
import '../../dist/components/autocomplete.css';
import AutocompleteItem from './autocomplete-item';
import { getLastIndexOfSubstringIgnoreCase } from '../utils';

class Autocomplete extends Component {
  static filterOptions(items, query) {
    return items.filter(item => getLastIndexOfSubstringIgnoreCase(item.pathLabel, query) >= 0);
  }

  constructor(props) {
    super(props);
    this.state = {
      textInputValue: '',
      hoverIndex: -1,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNodeSelect = this.handleNodeSelect.bind(this);
  }

  handleChange(event) {
    const {
      data,
      onChange,
    } = this.props;
    const { value } = event.target;
    let showDropdown = false;
    const trimmed = value.trim();
    if (trimmed) {
      onChange(trimmed);
      const found = Autocomplete.filterOptions(data, trimmed);
      showDropdown = found.length > 0;
    }
    this.resetDropdown({
      textInputValue: value,
      showDropdown,
    });
  }

  buildOptions(data, substringToHighlight, hoverIndex) {
    return (
      <ul>
        {data.map((item, index) => (
          <AutocompleteItem
            item={item}
            active={hoverIndex === index}
            substringToHighlight={substringToHighlight}
            key={item.value}
            handleOnClick={this.handleNodeSelect}
          />
        ))}
      </ul>
    );
  }

  handleNodeSelect(item) {
    const {
      onSelect,
      clearOnSelect,
    } = this.props;
    this.resetDropdown({
      textInputValue: clearOnSelect ? '' : item.pathLabel,
      showDropdown: false,
    });
    onSelect(item);
  }

  resetDropdown({ textInputValue, showDropdown }) {
    this.setState({
      hoverIndex: -1,
      textInputValue,
      showDropdown,
    });
    const { showDropwdownUpdated } = this.props;
    showDropwdownUpdated(showDropdown);
  }

  handleOnKeyDown(event) {
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      let { hoverIndex } = this.state;
      if (hoverIndex <= 0) {
        hoverIndex = -1;
      } else {
        hoverIndex -= 1;
      }
      this.setState({ hoverIndex });
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      let { hoverIndex } = this.state;
      const { textInputValue } = this.state;
      const { data } = this.props;
      const options = Autocomplete.filterOptions(data, textInputValue);
      hoverIndex = Math.min(options.length - 1, hoverIndex + 1);
      this.setState({ hoverIndex });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const {
      hoverIndex,
      textInputValue,
      showDropdown,
    } = this.state;
    const { data } = this.props;
    let chosen;
    if (showDropdown && hoverIndex >= 0) {
      const options = Autocomplete.filterOptions(data, textInputValue);
      chosen = options[hoverIndex];
      this.handleNodeSelect(chosen);
    }
  }

  render() {
    const {
      textInputValue,
      showDropdown,
      hoverIndex,
    } = this.state;
    const { data, placeholder } = this.props;
    return (
      <div className="dropdown-container">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={textInputValue}
            onChange={this.handleChange}
            onKeyDown={this.handleOnKeyDown}
            placeholder={placeholder}
          />
        </form>
        <div className={showDropdown ? 'autocomplete-menu dropdown-menu-open' : 'autocomplete-menu'}>
          {this.buildOptions(
            Autocomplete.filterOptions(data, textInputValue),
            textInputValue,
            hoverIndex,
          )}
        </div>
      </div>
    );
  }
}

Autocomplete.defaultProps = {
  showDropwdownUpdated: () => {},
  onChange: () => {},
  clearOnSelect: false,
  placeholder: '',
};

Autocomplete.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  onSelect: PropTypes.func.isRequired,
  showDropwdownUpdated: PropTypes.func,
  clearOnSelect: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default Autocomplete;
