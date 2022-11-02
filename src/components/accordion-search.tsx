import { useState, useEffect, ReactNode, useMemo, CSSProperties } from 'react';

import Accordion from './accordion';
import SearchInput from './search-input';
import Loader from './loader';

import {
  getLastIndexOfSubstringIgnoreCase,
  highlightSubstring,
} from '../utils';

import '../styles/components/accordion-search.scss';

type Item<T extends ReactNode = string> = {
  label: T;
  id: string;
};

export type SelectedItem = {
  accordionId: string;
  itemId: string;
};

type AccordionSearchItemProps = {
  /**
   * An array of objects which populates the list items
   */
  items: Item<ReactNode>[];
  /**
   * String used to fill in the search input when empty
   */
  id: string;
  /**
   * Callback that is fired when an accordion's item is selected
   */
  onSelect: (accordionId: string, itemId: string) => unknown;
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
  title: ReactNode;
};

const AccordionSearchItem = ({
  title,
  alwaysOpen,
  items,
  selected,
  columns,
  onSelect,
  id,
}: AccordionSearchItemProps) => (
  <Accordion title={title} count={selected.length} alwaysOpen={alwaysOpen}>
    <ul
      className={`no-bullet accordion-search__list${
        columns ? ' accordion-search__list--columns' : ''
      }`}
    >
      {items.map(({ label, id: itemId }) => (
        <li
          key={itemId}
          className="accordion-search__list__item"
          data-testid="accordion-search-list-item"
        >
          <label key={itemId} htmlFor={`checkbox-${itemId}`}>
            <input
              type="checkbox"
              id={`checkbox-${itemId}`}
              className="accordion-search__list__item-checkbox"
              onChange={() => onSelect(id, itemId)}
              checked={selected.some((item) => item.itemId === itemId)}
            />
            {label}
          </label>
        </li>
      ))}
    </ul>
  </Accordion>
);

const highlightItems = (items: Item[], query: string): Item<ReactNode>[] =>
  items.map((item) => ({
    ...item,
    label: highlightSubstring(item.label, query),
  }));

type AccordionDatum<T extends ReactNode = string> = {
  title: T;
  id: string;
  items: Item<T>[];
};

export const filterAccordionData = (
  accordionData: AccordionDatum[],
  query: string
) => {
  if (!query) {
    return accordionData;
  }
  const filteredAccordionData: AccordionDatum<ReactNode>[] = [];
  for (const accordionDatum of accordionData) {
    if (getLastIndexOfSubstringIgnoreCase(accordionDatum.title, query) >= 0) {
      filteredAccordionData.push({
        ...accordionDatum,
        title: highlightSubstring(accordionDatum.title, query),
        items: highlightItems(accordionDatum.items, query),
      });
    } else {
      const filteredItems = accordionDatum.items.filter(
        ({ label }) => getLastIndexOfSubstringIgnoreCase(label, query) >= 0
      );
      if (filteredItems.length > 0) {
        filteredAccordionData.push({
          ...accordionDatum,
          items: highlightItems(filteredItems, query),
        });
      }
    }
  }
  return filteredAccordionData;
};

type AccordionSearchProps = {
  /**
   * An array of objects each of which is used to populate an accordion.
   */
  accordionData: AccordionDatum<string>[];
  /**
   * String used to fill in the search input when empty
   */
  placeholder?: string;
  /**
   * Callback that is fired when an accordion's item is selected
   */
  onSelect: (accordionId: string, itemId: string) => unknown;
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
    Array<AccordionDatum<ReactNode>>
  >([]);

  useEffect(() => {
    const filteredData = filterAccordionData(accordionData, inputValue.trim());
    setFilteredAccordionData(filteredData);
  }, [accordionData, inputValue]);

  const style: CSSProperties | undefined = useMemo(
    () => (searchInputWidth ? { width: searchInputWidth } : undefined),
    [searchInputWidth]
  );

  if (!accordionData || !accordionData.length) {
    return <Loader />;
  }

  let accordionGroupNode = <div>No matches found</div>;
  if (filteredAccordionData && filteredAccordionData.length) {
    accordionGroupNode = (
      <div className="accordion-group accordion-search">
        {filteredAccordionData.map(({ title, id: accordionId, items }) => (
          <AccordionSearchItem
            title={title}
            key={accordionId}
            id={accordionId}
            alwaysOpen={!!inputValue}
            items={items}
            selected={selected.filter(
              (item) => item.accordionId === accordionId
            )}
            columns={columns}
            onSelect={onSelect}
          />
        ))}
      </div>
    );
  }

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
