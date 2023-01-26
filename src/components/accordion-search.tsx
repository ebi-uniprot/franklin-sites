import { useState, useEffect, ReactNode, useMemo, CSSProperties } from 'react';

import Accordion from './accordion';
import SearchInput from './search-input';
import Loader from './loader';

import {
  getLastIndexOfSubstringIgnoreCase,
  highlightSubstring,
} from '../utils';

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

  // const filteredAccordionData: AccordionItem<ReactNode>[] = [];
  const foo = accordionData
    .map((item) => {
      if (
        item.items?.length &&
        getLastIndexOfSubstringIgnoreCase(item.label, query) >= 0
      ) {
        return item;
      }
      if (item.items?.length) {
        const items = filterAccordionData(item.items, query);
        return { ...item, items };
      }
      return getLastIndexOfSubstringIgnoreCase(item.label, query) >= 0 && item;
    })
    .filter(Boolean);
  console.log(accordionData);
  console.log(foo);
  console.log('----');
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
  // const [filteredAccordionData, setFilteredAccordionData] = useState<
  //   Array<AccordionItem<ReactNode>>
  // >([]);

  // useEffect(() => {
  //   const filteredData = filterAccordionData(accordionData, inputValue.trim());
  //   setFilteredAccordionData(filteredData);
  // }, [accordionData, inputValue]);
  console.log(filterAccordionData(accordionData, inputValue.trim()));
  const style: CSSProperties | undefined = useMemo(
    () => (searchInputWidth ? { width: searchInputWidth } : undefined),
    [searchInputWidth]
  );

  if (!accordionData || !accordionData.length) {
    return <Loader />;
  }

  const accordionGroupNode = accordionData.map(({ label, id, items }) => (
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
  ));
  // let accordionGroupNode = <div>No matches found</div>;
  // if (filteredAccordionData && filteredAccordionData.length) {
  //   accordionGroupNode = (
  //         <AccordionSearchItem
  //           title={label}
  //           key={}
  //           id={"top"}
  //           alwaysOpen={!!inputValue}
  //           items={accordionData}
  //           selected={selected.filter((item) => item.accordionId === id)}
  //           columns={columns}
  //           onSelect={onSelect}
  //         />
  //       ))}
  //     </div>
  //   );
  // }

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
