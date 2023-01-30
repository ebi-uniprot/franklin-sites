import {
  useState,
  ReactNode,
  useMemo,
  CSSProperties,
  useCallback,
} from 'react';
import { cloneDeep, debounce } from 'lodash-es';

import Accordion from './accordion';
import SearchInput from './search-input';
import Loader from './loader';

import { highlightSubstring } from '../utils';

import '../styles/components/accordion-search.scss';

export type AccordionItem<T extends ReactNode = string> = {
  label: T;
  id: string;
  items?: AccordionItem<T>[];
};

type Item<T extends ReactNode = string> = {
  label: T;
  id: string;
  items?: Item<T>[];
};

export type SelectedItem = {
  accordionId: string;
  itemId: string;
};

type AccordionSearchItemProps = {
  /**
   * An array of objects which populates the list items
   */
  items: Item<string>[];
  /**
   * String used to fill in the search input when empty
   */
  id: string;
  /**
   * Callback that is fired when an accordion's item is selected
   */
  onSelect: (id: string) => unknown;
  /**
   * Array of the selected items' IDs
   */
  selected: string[];
  /**
   * A boolean indicating whether the component should span multiple
   * columns: 2 columns for medium to 3 columns for large+ screens.
   */
  alwaysOpen?: boolean;
  /**
   * A boolean indicating whether the component should span multiple
   * columns: 2 columns for medium to 3 columns for large+ screens.
   */
  columns?: boolean;
  /**
   * The title, works as a trigger to open/close
   */
  label: string;
  /**
   * The user's query, passed to highlight in the item's label
   */
  query: string;
};

const AccordionSearchCheckbox = ({
  onSelect,
  selected,
  id,
  label,
  query,
}: Omit<AccordionSearchItemProps, 'items' | 'alwaysOpen' | 'columns'>) => (
  <li
    key={id}
    className="accordion-search__list__item"
    data-testid="accordion-search-list-item"
  >
    <label key={id} htmlFor={`checkbox-${id}`}>
      <input
        type="checkbox"
        id={`checkbox-${id}`}
        className="accordion-search__list__item-checkbox"
        onChange={() => {
          onSelect(id);
        }}
        checked={selected.includes(id)}
      />
      {highlightSubstring(label, query)}
    </label>
  </li>
);

const getKeys = (item: Item<string>[] | Item): string[] | string => {
  if (Array.isArray(item)) {
    return item.flatMap((i) => getKeys(i));
  }
  if (item.items) {
    return getKeys(item.items);
  }
  return item.id;
};

const AccordionSearchItem = ({
  label,
  alwaysOpen,
  items,
  selected,
  columns,
  onSelect,
  id,
  query,
}: AccordionSearchItemProps) => {
  const itemKeys = useMemo(() => new Set(getKeys(items)), [items]);
  const count = selected.filter((s) => itemKeys.has(s)).length;
  return (
    <Accordion
      title={highlightSubstring(label, query)}
      count={count}
      alwaysOpen={alwaysOpen}
      key={id}
    >
      <ul
        className={`no-bullet accordion-search__list${
          columns ? ' accordion-search__list--columns' : ''
        }`}
      >
        {items.map((item) =>
          item.items ? (
            <AccordionSearchItem
              label={item.label}
              alwaysOpen={alwaysOpen}
              items={item.items}
              selected={selected}
              columns={columns}
              onSelect={onSelect}
              id={item.id}
              key={item.id}
              query={query}
            />
          ) : (
            <AccordionSearchCheckbox
              label={item.label}
              selected={selected}
              onSelect={onSelect}
              id={item.id}
              key={item.id}
              query={query}
            />
          )
        )}
      </ul>
    </Accordion>
  );
};

export const filterAccordionData = (
  accordionData: AccordionItem[],
  query: string
) => {
  if (!query) {
    return accordionData;
  }
  return accordionData.filter((item): boolean => {
    if (item.items?.length) {
      if (item.label.toLowerCase().includes(query)) {
        return true;
      }
      item.items = filterAccordionData(item.items, query);
      return !!item.items?.length;
    }
    return item.label.toLowerCase().includes(query);
  });
};

type AccordionSearchProps = {
  /**
   * An array of objects each of which is used to populate an accordion.
   */
  accordionData: AccordionItem<string>[];
  /**
   * String used to fill in the search input when empty
   */
  placeholder?: string;
  /**
   * Callback that is fired when an accordion's item is selected
   */
  onSelect: (itemId: string) => unknown;
  /**
   * Array of the selected items' IDs
   */
  selected: SelectedItem[];
  /**
   * The width of the text input box
   */
  searchInputWidth?: string | number;
  /**
   * A boolean indicating whether the component should span multiple
   * columns: 2 columns for medium to 3 columns for large+ screens.
   */
  columns?: boolean;
};

const AccordionSearch = ({
  accordionData,
  placeholder = '',
  onSelect,
  selected,
  searchInputWidth = '18rem',
  columns,
}: AccordionSearchProps) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredAccordionData, setFilteredAccordionData] =
    useState<Array<AccordionItem<string>>>(accordionData);
  const [previousInputValue, setPreviousInputValue] = useState(inputValue);

  const debouncedFilterAccordionData = useCallback(
    debounce((value) => {
      const inputValueLower = value.toLowerCase();
      const dataToFilter =
        inputValue && inputValue.includes(previousInputValue)
          ? filteredAccordionData
          : cloneDeep(accordionData);
      const filteredData = filterAccordionData(
        dataToFilter,
        inputValueLower.trim()
      );
      setFilteredAccordionData(filteredData);
      setPreviousInputValue(inputValueLower);
    }, 500),
    []
  );

  const style: CSSProperties | undefined = useMemo(
    () => (searchInputWidth ? { width: searchInputWidth } : undefined),
    [searchInputWidth]
  );

  if (!accordionData || !accordionData.length) {
    return <Loader />;
  }

  const accordionGroupNode = filteredAccordionData.length ? (
    filteredAccordionData.map(({ label, id, items }) => (
      <AccordionSearchItem
        label={label}
        alwaysOpen={!!inputValue}
        items={items}
        selected={selected}
        columns={columns}
        onSelect={onSelect}
        id={id}
        key={id}
        query={inputValue}
      />
    ))
  ) : (
    <div>No matches found</div>
  );

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputValue(event.target.value);
    debouncedFilterAccordionData(event.target.value);
  };
  return (
    <>
      <div style={style}>
        <SearchInput
          type="text"
          value={inputValue}
          onChange={handleSearchInputChange}
          placeholder={placeholder}
        />
      </div>
      {accordionGroupNode}
    </>
  );
};

export default AccordionSearch;
