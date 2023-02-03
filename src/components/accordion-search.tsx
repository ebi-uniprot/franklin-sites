import { useState, useMemo, useRef, useEffect } from 'react';
import { debounce } from 'lodash-es';

import Accordion from './accordion';
import SearchInput from './search-input';
import Loader from './loader';

import { highlightSubstring } from '../utils';

import '../styles/components/accordion-search.scss';

const getKeys = (item: AccordionItem[] | AccordionItem): string[] | string => {
  if (Array.isArray(item)) {
    return item.flatMap((i) => getKeys(i));
  }
  if (item.items) {
    return getKeys(item.items);
  }
  return item.id;
};

export const filterAccordionData = (
  accordionData: AccordionItem[],
  query: string
): AccordionItem[] => {
  if (!query) {
    return accordionData;
  }
  const result = [];
  for (const item of accordionData) {
    if (item.label.toLowerCase().includes(query)) {
      result.push(item);
    } else if (item.items?.length) {
      if (item.label.toLowerCase().includes(query)) {
        result.push(item);
      } else {
        const items = filterAccordionData(item.items, query);
        if (items.length) {
          result.push({ ...item, items });
        }
      }
    }
  }
  return result;
};

export type AccordionItem = {
  label: string;
  id: string;
  items?: AccordionItem[];
};

type AccordionSearchItemProps = {
  /**
   * An array of objects which populates the list items
   */
  items: AccordionItem[];
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
   * Indicates if the accordion should always be open
   */
  alwaysOpen?: boolean;
  /**
   * Indicates if the item should initially be open ie the user can
   * still collapse after intial load.
   */
  initialOpen?: boolean;
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

const AccordionSearchItem = ({
  label,
  alwaysOpen,
  items,
  selected,
  columns,
  onSelect,
  id,
  query,
  initialOpen = false,
}: AccordionSearchItemProps) => {
  const itemKeys = useMemo(() => new Set(getKeys(items)), [items]);
  const count = selected.filter((s) => itemKeys.has(s)).length;
  const areChildrenCheckboxes = items.every((item) => !item.items);
  return (
    <Accordion
      title={highlightSubstring(label, query)}
      count={count}
      alwaysOpen={alwaysOpen}
      key={id}
      initialOpen={initialOpen}
    >
      {areChildrenCheckboxes ? (
        <ul
          className={`no-bullet accordion-search__list${
            columns ? ' accordion-search__list--columns' : ''
          }`}
        >
          {items.map((item) => (
            <AccordionSearchCheckbox
              label={item.label}
              selected={selected}
              onSelect={onSelect}
              id={item.id}
              key={item.id}
              query={query}
            />
          ))}
        </ul>
      ) : (
        <ul className="no-bullet accordion-search__list">
          {items.map(
            (item) =>
              item.items?.length && (
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
              )
          )}
        </ul>
      )}
    </Accordion>
  );
};

type AccordionSearchProps = {
  /**
   * An array of objects each of which is used to populate an accordion.
   */
  accordionData: AccordionItem[];
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
  selected: string[];
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
  columns,
}: AccordionSearchProps) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredAccordionData, setFilteredAccordionData] =
    useState<Array<AccordionItem>>(accordionData);
  const loaded = useRef(false);

  const debouncedFilterAccordionData = useMemo(
    () =>
      debounce((value) => {
        const inputValueLower = value.toLowerCase();
        setFilteredAccordionData(() => {
          const filteredData = filterAccordionData(
            accordionData,
            inputValueLower.trim()
          );
          return filteredData;
        });
      }, 500),
    [accordionData]
  );

  useEffect(() => {
    loaded.current = true;
    return debouncedFilterAccordionData.cancel;
  }, [debouncedFilterAccordionData]);

  if (!accordionData || !accordionData.length) {
    return <Loader />;
  }

  const accordionGroupNode = filteredAccordionData.length ? (
    filteredAccordionData.map(
      ({ label, id, items }, index) =>
        items?.length && (
          <AccordionSearchItem
            label={label}
            initialOpen={!loaded.current && index === 0}
            alwaysOpen={!!inputValue}
            items={items}
            selected={selected}
            columns={columns}
            onSelect={onSelect}
            id={id}
            key={id}
            query={inputValue}
          />
        )
    )
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
      <SearchInput
        type="text"
        value={inputValue}
        onChange={handleSearchInputChange}
        placeholder={placeholder}
      />
      {accordionGroupNode}
    </>
  );
};

export default AccordionSearch;
