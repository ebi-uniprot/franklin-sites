import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash-es';

import AutocompleteItem from './autocomplete-item';
import SearchInput from './search-input';

import { getLastIndexOfSubstringIgnoreCase } from '../utils';

import '../styles/components/dropdown.scss';
import '../styles/components/autocomplete.scss';

class Autocomplete extends Component {
  static filterOptions(items, query) {
    return items.filter(
      (item) => getLastIndexOfSubstringIgnoreCase(item.pathLabel, query) >= 0
    );
  }

  static shouldShowDropdown({
    textInputValue,
    data,
    selected,
    filter,
    minCharsToShowDropdown,
  }) {
    const trimmed = textInputValue.trim();
    let showDropdown = false;
    if (trimmed && !selected && trimmed.length >= minCharsToShowDropdown) {
      const found = filter ? Autocomplete.filterOptions(data, trimmed) : data;
      showDropdown = found.length > 0;
    }
    return showDropdown;
  }

  constructor(props) {
    super(props);
    const { value } = props;
    this.state = {
      textInputValue: value || '',
      hoverIndex: -1,
      selected: false,
      submittedInputValue: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
    this.handleOnEnterKeyDown = this.handleOnEnterKeyDown.bind(this);
    this.handleNodeSelect = this.handleNodeSelect.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { value } = this.props;
    const { value: prevValue } = prevProps;
    if (value !== prevValue) {
      this.setState({ textInputValue: value });
    }
  }

  handleInputChange(event) {
    const { value: textInputValue } = event.target;
    const {
      data,
      filter,
      showDropdownUpdated,
      onChange,
      minCharsToShowDropdown,
    } = this.props;
    const selected = false;
    const showDropdown = Autocomplete.shouldShowDropdown({
      textInputValue,
      data,
      selected,
      filter,
      minCharsToShowDropdown,
    });
    showDropdownUpdated(showDropdown);
    this.setState({
      textInputValue,
      selected,
    });
    onChange(textInputValue);
  }

  handleNodeSelect(item) {
    const { onSelect, clearOnSelect, showDropdownUpdated } = this.props;
    const { submittedInputValue } = this.state;
    const textInputValue = item && item.pathLabel ? item.pathLabel : item;
    // If the same value has already been submitted, don't resubmit
    if (!clearOnSelect && submittedInputValue === textInputValue) {
      this.setState({
        textInputValue: clearOnSelect ? '' : textInputValue,
      });
      showDropdownUpdated(false);
      return;
    }
    this.setState({
      textInputValue: clearOnSelect ? '' : textInputValue,
      submittedInputValue: textInputValue,
      hoverIndex: -1,
      selected: true,
    });
    showDropdownUpdated(false);
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
      const options = filter
        ? Autocomplete.filterOptions(data, textInputValue)
        : data;
      hoverIndex = Math.min(options.length - 1, hoverIndex + 1);
      this.setState({ hoverIndex });
    } else if (event.key === 'Escape') {
      event.preventDefault();
      this.setState({ hoverIndex: -1, selected: true });
    } else if (event.key === 'Enter') {
      event.preventDefault();
      this.handleOnEnterKeyDown();
    }
  }

  handleOnEnterKeyDown() {
    const { hoverIndex, textInputValue } = this.state;
    const { data, filter } = this.props;
    let chosen;
    if (hoverIndex >= 0) {
      const options = filter
        ? Autocomplete.filterOptions(data, textInputValue)
        : data;
      chosen = options[hoverIndex];
      this.handleNodeSelect(chosen);
    } else {
      this.handleNodeSelect(textInputValue);
    }
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

  render() {
    const { textInputValue, hoverIndex, selected } = this.state;
    const {
      data,
      placeholder,
      filter,
      minCharsToShowDropdown,
      isLoading,
      autoFocus,
    } = this.props;
    const showDropdown = Autocomplete.shouldShowDropdown({
      textInputValue,
      data,
      selected,
      filter,
      minCharsToShowDropdown,
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
      <div className="autocomplete-container">
        <SearchInput
          type="text"
          value={textInputValue}
          onChange={this.handleInputChange}
          onKeyDown={this.handleOnKeyDown}
          placeholder={placeholder}
          isLoading={isLoading}
          autoFocus={autoFocus}
        />
        <div
          className={
            showDropdown
              ? 'autocomplete-menu dropdown-menu-open'
              : 'autocomplete-menu'
          }
        >
          <div className="dropdown-menu__panel">{nodes}</div>
        </div>
      </div>
    );
  }
}

Autocomplete.defaultProps = {
  showDropdownUpdated: noop,
  onChange: noop,
  clearOnSelect: false,
  placeholder: '',
  filter: true,
  value: '',
  minCharsToShowDropdown: 0,
  isLoading: false,
  autoFocus: false,
};

Autocomplete.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  onSelect: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  showDropdownUpdated: PropTypes.func,
  clearOnSelect: PropTypes.bool,
  placeholder: PropTypes.string,
  filter: PropTypes.bool,
  value: PropTypes.string,
  minCharsToShowDropdown: PropTypes.number,
  isLoading: PropTypes.bool,
  autoFocus: PropTypes.bool,
};

export default Autocomplete;
