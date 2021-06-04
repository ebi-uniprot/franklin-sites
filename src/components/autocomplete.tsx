import { useCallback, useEffect, useState } from 'react';
import cn from 'classnames';

import AutocompleteItem, { AutocompleteItemType } from './autocomplete-item';
import SearchInput from './search-input';

import { getLastIndexOfSubstringIgnoreCase } from '../utils';

import '../styles/components/dropdown.scss';
import '../styles/components/autocomplete.scss';

export const filterOptions = (items: AutocompleteItemType[], query: string) =>
  items.filter(
    (item) => getLastIndexOfSubstringIgnoreCase(item.pathLabel, query) >= 0
  );

export const shouldShowDropdown = (
  textInputValue: string,
  data: AutocompleteItemType[],
  selected: boolean,
  filter: boolean,
  minCharsToShowDropdown: number
) => {
  const trimmed = textInputValue.trim();
  let showDropdown = false;
  if (trimmed && !selected && trimmed.length >= minCharsToShowDropdown) {
    const found = filter ? filterOptions(data, trimmed) : data;
    showDropdown = found.length > 0;
  }
  return showDropdown;
};

type AutocompleteProps = {
  data: AutocompleteItemType[];
  onSelect: (selected: AutocompleteItemType | string) => void;
  onChange?: (textInput: string) => void;
  showDropdownUpdated?: (updated: boolean) => void;
  clearOnSelect?: boolean;
  placeholder?: string;
  filter?: boolean;
  value?: string;
  minCharsToShowDropdown?: number;
  isLoading?: boolean;
  autoFocus?: boolean;
};

const Autocomplete = ({
  data,
  onSelect,
  onChange,
  showDropdownUpdated,
  clearOnSelect = false,
  placeholder = '',
  filter = true,
  value = '',
  minCharsToShowDropdown = 0,
  isLoading = false,
  autoFocus = false,
}: AutocompleteProps) => {
  const [textInputValue, setTextInputValue] = useState(value);
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [selected, setSelected] = useState(false);
  const [submittedInputValue, setSubmittedInputValue] = useState('');

  useEffect(() => {
    setTextInputValue(value);
  }, [value]);

  const handleInputChange = useCallback(
    (event) => {
      const { value: textInputValue } = event.target;
      const selected = false;
      const showDropdown = shouldShowDropdown(
        textInputValue,
        data,
        selected,
        filter,
        minCharsToShowDropdown
      );
      showDropdownUpdated?.(showDropdown);
      setTextInputValue(textInputValue);
      setSelected(selected);
      onChange?.(textInputValue);
    },
    [data, filter, minCharsToShowDropdown, onChange, showDropdownUpdated]
  );

  const handleNodeSelect = useCallback(
    (selected: AutocompleteItemType | string) => {
      const textInputValue =
        typeof selected === 'string' ? selected : selected?.pathLabel;

      // If the same value has already been submitted, don't resubmit
      if (!clearOnSelect && submittedInputValue === textInputValue) {
        setTextInputValue(clearOnSelect ? '' : textInputValue);
        showDropdownUpdated?.(false);
      } else {
        setTextInputValue(clearOnSelect ? '' : textInputValue);
        setSubmittedInputValue(textInputValue);
        setHoverIndex(-1);
        setSelected(true);
        showDropdownUpdated?.(false);
        onSelect(selected);
      }
    },
    [clearOnSelect, onSelect, showDropdownUpdated, submittedInputValue]
  );

  const handleOnKeyDown = useCallback(
    (event) => {
      if (event.key === 'ArrowUp') {
        event.preventDefault();
        setHoverIndex(hoverIndex <= 0 ? -1 : hoverIndex - 1);
      } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        const options = filter ? filterOptions(data, textInputValue) : data;
        setHoverIndex(Math.min(options.length - 1, hoverIndex + 1));
      } else if (event.key === 'Escape') {
        event.preventDefault();
        setHoverIndex(-1);
        setSelected(true);
      } else if (event.key === 'Enter') {
        event.preventDefault();
        if (hoverIndex >= 0) {
          const options = filter ? filterOptions(data, textInputValue) : data;
          handleNodeSelect(options[hoverIndex]);
        } else {
          handleNodeSelect(textInputValue);
        }
      }
    },
    [data, filter, handleNodeSelect, hoverIndex, textInputValue]
  );

  const showDropdown = shouldShowDropdown(
    textInputValue,
    data,
    selected,
    filter,
    minCharsToShowDropdown
  );
  let nodes;
  if (showDropdown) {
    nodes = (filter ? filterOptions(data, textInputValue) : data).map(
      (item, index) => (
        <AutocompleteItem
          item={item}
          active={hoverIndex === index}
          substringToHighlight={textInputValue}
          key={item.id}
          handleOnClick={handleNodeSelect}
        />
      )
    );
  }

  return (
    <div className="autocomplete-container">
      <SearchInput
        type="text"
        value={textInputValue}
        onChange={handleInputChange}
        onKeyDown={handleOnKeyDown}
        placeholder={placeholder}
        isLoading={isLoading}
        autoFocus={autoFocus}
      />
      <div
        className={cn('autocomplete-menu', {
          'dropdown-menu-open': showDropdown,
        })}
      >
        <div className="dropdown-menu__panel">
          <ul>{nodes}</ul>
        </div>
      </div>
    </div>
  );
};

export default Autocomplete;
