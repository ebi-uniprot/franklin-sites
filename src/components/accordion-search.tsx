import { useState, useEffect, ReactNode, useMemo, CSSProperties } from 'react';

import Accordion from './accordion';
import SearchInput from './search-input';
import Loader from './loader';

import {
  getLastIndexOfSubstringIgnoreCase,
  highlightSubstring,
} from '../utils';

import '../styles/components/accordion-search.scss';
import { cloneDeep } from 'lodash-es';

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
  items?: Item<ReactNode>[];
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
  selected: SelectedItem[];
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
  label: ReactNode;
};

const AccordionSearchItem = ({
  label,
  alwaysOpen,
  items,
  selected,
  columns,
  onSelect,
  id,
}: AccordionSearchItemProps) =>
  // console.log(label, items, id);
  items ? (
    <Accordion
      title={label}
      count={selected.length}
      alwaysOpen={alwaysOpen}
      key={id}
    >
      <ul
        className={`no-bullet accordion-search__list${
          columns ? ' accordion-search__list--columns' : ''
        }`}
      >
        {items.map((item) => (
          <AccordionSearchItem
            label={item.label}
            alwaysOpen={alwaysOpen}
            items={item.items}
            selected={selected}
            columns={columns}
            onSelect={onSelect}
            id={item.id}
            key={item.id}
          />
        ))}
      </ul>
    </Accordion>
  ) : (
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
          onChange={() => onSelect(id)}
          checked={selected.some((item) => item.itemId === id)}
        />
        {label}
      </label>
    </li>
  );

const highlightItems = (items: Item[], query: string): Item<ReactNode>[] =>
  items.map((item) => ({
    ...item,
    label: highlightSubstring(item.label, query),
  }));

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
  // for (const accordionItem of accordionData) {
  //   if (getLastIndexOfSubstringIgnoreCase(accordionItem.label, query) >= 0) {
  //     filteredAccordionData.push({
  //       ...accordionItem,
  //       label: highlightSubstring(accordionItem.label, query),
  //       items: highlightItems(accordionItem.items, query),
  //     });
  //   } else {
  //     const foundItems = accordionItem.items.filter(
  //       ({ label }) => getLastIndexOfSubstringIgnoreCase(label, query) >= 0
  //     );
  //     if (filteredItems.length > 0) {
  //       filteredAccordionData.push({
  //         ...accordionItem,
  //         items: highlightItems(filteredItems, query),
  //       });
  //     }
  //   }
  // }
  // return filteredAccordionData;
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
  const [filteredAccordionData, setFilteredAccordionData] = useState<
    Array<AccordionItem<string>>
  >([]);
  const [previousInputValue, setPreviousInputValue] = useState(inputValue);

  useEffect(() => {
    const inputValueLower = inputValue.toLowerCase();
    const dataToFilter =
      inputValue && inputValue.includes(previousInputValue)
        ? filteredAccordionData
        : cloneDeep(accordionData);
    const filteredData = filterAccordionData(
      dataToFilter,
      inputValueLower.trim()
    );
    setFilteredAccordionData(filteredData);
    setPreviousInputValue(inputValue.toLowerCase());
  }, [accordionData, inputValue]);

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
      />
    ))
  ) : (
    <div>No matches found</div>
  );

  return (
    <>
      <div style={style}>
        <SearchInput
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder={placeholder}
        />
      </div>
      {accordionGroupNode}
    </>
  );
};

export default AccordionSearch;
