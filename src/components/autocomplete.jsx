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

  static shouldShowDropdown({
    textInputValue, data, selected, filter,
  }) {
    let showDropdown = false;
    const trimmed = textInputValue.trim();
    if (trimmed && !selected) {
      const found = filter ? Autocomplete.filterOptions(data, trimmed) : data;
      showDropdown = found.length > 0;
    }
    return showDropdown;
  }

  constructor(props) {
    super(props);
    this.state = {
      textInputValue: '',
      hoverIndex: -1,
      selected: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNodeSelect = this.handleNodeSelect.bind(this);
  }

  handleInputChange(event) {
    const { value: textInputValue } = event.target;
    const {
      data, filter, showDropwdownUpdated, onChange,
    } = this.props;
    const hoverIndex = -1;
    const selected = false;
    const showDropwdown = Autocomplete.shouldShowDropdown({
      textInputValue,
      data,
      selected,
      filter,
    });
    showDropwdownUpdated(showDropwdown);
    this.setState({
      textInputValue,
      hoverIndex,
      selected,
    });
    onChange(textInputValue);
  }

  buildOptions({ data, substringToHighlight, hoverIndex }) {
    return (
      <ul>
        {data.map((item, index) => (
          <AutocompleteItem
            item={item}
            active={hoverIndex === index}
            substringToHighlight={substringToHighlight}
            key={item.id}
            handleOnClick={this.handleNodeSelect}
          />
        ))}
      </ul>
    );
  }

  handleNodeSelect(item) {
    const { onSelect, clearOnSelect, showDropwdownUpdated } = this.props;
    this.setState({
      textInputValue: clearOnSelect ? '' : item.pathLabel,
      hoverIndex: -1,
      selected: true,
    });
    showDropwdownUpdated(false);
    onSelect(item);
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
      const { data, filter } = this.props;
      const options = filter ? Autocomplete.filterOptions(data, textInputValue) : data;
      hoverIndex = Math.min(options.length - 1, hoverIndex + 1);
      this.setState({ hoverIndex });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const { hoverIndex, textInputValue } = this.state;
    const { data, filter } = this.props;
    let chosen;
    if (hoverIndex >= 0) {
      const options = filter ? Autocomplete.filterOptions(data, textInputValue) : data;
      chosen = options[hoverIndex];
      this.handleNodeSelect(chosen);
    }
  }

  render() {
    const { textInputValue, hoverIndex, selected } = this.state;
    const { data, placeholder, filter } = this.props;
    const showDropdown = Autocomplete.shouldShowDropdown({
      textInputValue,
      data,
      selected,
      filter,
    });
    let nodes;
    if (showDropdown) {
      nodes = this.buildOptions({
        data: filter ? Autocomplete.filterOptions(data, textInputValue) : data,
        substringToHighlight: textInputValue,
        hoverIndex,
      });
    }
    return (
      <div className="dropdown-container">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={textInputValue}
            onChange={this.handleInputChange}
            onKeyDown={this.handleOnKeyDown}
            placeholder={placeholder}
          />
        </form>
        <div
          className={showDropdown ? 'autocomplete-menu dropdown-menu-open' : 'autocomplete-menu'}
        >
          <div className="dropdown-menu__panel">{nodes}</div>
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
  filter: true,
};

Autocomplete.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  onSelect: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  showDropwdownUpdated: PropTypes.func,
  clearOnSelect: PropTypes.bool,
  placeholder: PropTypes.string,
  filter: PropTypes.bool,
};

export default Autocomplete;
