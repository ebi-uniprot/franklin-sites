import {
  useState,
  useMemo,
  useDeferredValue,
  useEffect,
  useCallback,
} from 'react';

import { Accordion, Loader, Message, SearchInput, SubstringHighlight } from '.';

import '../styles/components/accordion-search.scss';

export const getLeafKeys = (
  item: AccordionItem[] | AccordionItem
): string[] | string => {
  if (Array.isArray(item)) {
    return item.flatMap((i) => getLeafKeys(i));
  }
  if (item.items) {
    return getLeafKeys(item.items);
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
      const items = filterAccordionData(item.items, query);
      if (items.length) {
        result.push({ ...item, items });
      }
    }
  }
  return result;
};

export type AccordionItem = {
  label: string;
  id: string;
  items?: AccordionItem[];
  addAsterisk?: boolean;
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
  /**
   * Appends an asterisk to selected items (in the case of xrefs this indicates full xrefs)
   */
  addAsterisk?: boolean;
};

const AccordionSearchCheckbox = ({
  onSelect,
  selected,
  id,
  label,
  query,
  addAsterisk,
}: Omit<AccordionSearchItemProps, 'items' | 'alwaysOpen' | 'columns'>) => (
  <li key={id} className="accordion-search__list__item">
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
      <SubstringHighlight substring={query}>{label}</SubstringHighlight>
      {addAsterisk && selected.includes(id) ? '*' : ''}
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
  addAsterisk,
  initialOpen = false,
}: AccordionSearchItemProps) => {
  const itemKeys = useMemo(() => new Set(getLeafKeys(items)), [items]);
  const count = selected.filter((s) => itemKeys.has(s)).length;
  const areChildrenCheckboxes = items.every((item) => !item.items);
  return (
    <Accordion
      accordionTitle={
        <SubstringHighlight substring={query}>{label}</SubstringHighlight>
      }
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
              addAsterisk={item.addAsterisk}
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
                  addAsterisk={addAsterisk}
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
    useState<AccordionItem[]>(accordionData);

  const deferredInputValue = useDeferredValue(inputValue);
  const deferredFilteredAccordionData = useDeferredValue(filteredAccordionData);

  useEffect(() => {
    setFilteredAccordionData(
      filterAccordionData(accordionData, inputValue.trim().toLowerCase())
    );
  }, [accordionData, inputValue]);

  const handleSearchInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    },
    []
  );

  if (!accordionData || !accordionData.length) {
    return <Loader />;
  }

  const accordionGroupNode = deferredFilteredAccordionData.length ? (
    deferredFilteredAccordionData.map(
      ({ label, id, items, addAsterisk }, index) =>
        items?.length && (
          <AccordionSearchItem
            label={label}
            initialOpen={index === 0}
            alwaysOpen={Boolean(deferredInputValue)}
            items={items}
            selected={selected}
            columns={columns}
            onSelect={onSelect}
            id={id}
            key={id}
            query={deferredInputValue}
            addAsterisk={addAsterisk}
          />
        )
    )
  ) : (
    <Message level="failure">No matches found</Message>
  );

  return (
    <>
      <SearchInput
        value={inputValue}
        onChange={handleSearchInputChange}
        placeholder={placeholder}
      />
      {accordionGroupNode}
    </>
  );
};

export default AccordionSearch;
