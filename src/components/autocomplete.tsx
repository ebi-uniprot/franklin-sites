import {
  useCallback,
  useEffect,
  useState,
  HTMLAttributes,
  ReactNode,
} from 'react';
import cn from 'classnames';
import { Except } from 'type-fest';

import AutocompleteItem, { AutocompleteItemType } from './autocomplete-item';
import SearchInput from './search-input';

import { getLastIndexOfSubstringIgnoreCase } from '../utils';

import '../styles/components/dropdown.scss';
import '../styles/components/autocomplete.scss';

export const filterOptions = (items: AutocompleteItemType[], query: string) =>
  items.filter(
    (item) =>
      getLastIndexOfSubstringIgnoreCase(item.pathLabel, query) >= 0 ||
      item.tags?.some(
        (tag) => getLastIndexOfSubstringIgnoreCase(tag, query) >= 0
      )
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
  onDropdownChange?: (dropdownShown: boolean) => void;
  clearOnSelect?: boolean;
  placeholder?: string;
  filter?: boolean;
  value?: string;
  minCharsToShowDropdown?: number;
  isLoading?: boolean;
  autoFocus?: boolean;
};

type Props = Except<
  HTMLAttributes<HTMLDivElement>,
  // Need to remove them because we use the same name as existing ones, but
  // but with a different signature
  'onSelect' | 'onChange'
> &
  AutocompleteProps;

const Autocomplete = ({
  data,
  onSelect,
  onChange,
  onDropdownChange,
  clearOnSelect = false,
  placeholder = '',
  filter = true,
  value = '',
  minCharsToShowDropdown = 0,
  isLoading = false,
  autoFocus = false,
  className,
  ...props
}: Props) => {
  const [textInputValue, setTextInputValue] = useState(value);
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    setTextInputValue(value);
  }, [value]);

  useEffect(
    () => () => {
      // On unmount tell the parent that the dropdown menu isn't being shown anymore.
      onDropdownChange?.(false);
    },
    [onDropdownChange]
  );

  const handleInputChange = useCallback(
    (event) => {
      const { value: textInputValue } = event.target;
      const showDropdown = shouldShowDropdown(
        textInputValue,
        data,
        false,
        filter,
        minCharsToShowDropdown
      );
      onDropdownChange?.(showDropdown);
      setTextInputValue(textInputValue);
      setSelected(false);
      onChange?.(textInputValue);
      if (showDropdown) {
        setHoverIndex(0);
      }
    },
    [data, filter, minCharsToShowDropdown, onChange, onDropdownChange]
  );

  const handleNodeSelect = useCallback(
    (selected: AutocompleteItemType | string) => {
      const textInputValue =
        typeof selected === 'string' ? selected : selected?.pathLabel;
      setTextInputValue(clearOnSelect ? '' : textInputValue);
      setHoverIndex(-1);
      setSelected(true);
      onDropdownChange?.(false);
      onSelect(selected);
    },
    [clearOnSelect, onSelect, onDropdownChange]
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

  let nodes: ReactNode[] = [];
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
    <div className={cn('autocomplete-container', className)} {...props}>
      <SearchInput
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
          {nodes.length ? <ul>{nodes}</ul> : null}
        </div>
      </div>
    </div>
  );
};

export default Autocomplete;
