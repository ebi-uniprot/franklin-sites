import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Accordion from './accordion';
import SearchInput from './search-input';
import Loader from './loader';
import {
  getLastIndexOfSubstringIgnoreCase,
  highlightSubstring,
} from '../utils';
import '../styles/components/accordion-search.scss';

const AccordionSearchItem = ({
  title,
  alwaysOpen,
  items,
  selected,
  columns,
  onSelect,
  id,
}) => (
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

AccordionSearchItem.propTypes = {
  /**
   * An array of objects which populates the list items
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
        .isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  /**
   * String used to fill in the search input when empty
   */
  id: PropTypes.string.isRequired,
  /**
   * Callback that is fired when an accordion's item is selected
   */
  onSelect: PropTypes.func.isRequired,
  /**
   * Array of the selected items' IDs
   */
  selected: PropTypes.arrayOf(PropTypes.object).isRequired,
  /**
   * A boolean indicating whether the component should span multiple
   * columns: 2 columns for medium to 3 columns for large+ screens.
   */
  alwaysOpen: PropTypes.bool,
  /**
   * A boolean indicating whether the component should span multiple
   * columns: 2 columns for medium to 3 columns for large+ screens.
   */
  columns: PropTypes.bool.isRequired,
  /**
   * The title, works as a trigger to open/close
   */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
};

AccordionSearchItem.defaultProps = {
  alwaysOpen: false,
};

const highlightItems = (items, query) =>
  items.map((item) => ({
    ...item,
    label: highlightSubstring(item.label, query),
  }));

export const filterAccordionData = (accordionData, query) => {
  if (!query) {
    return accordionData;
  }
  const filteredAccordionData = accordionData.reduce(
    (filteredAccordionDataAccum, accordionDatum) => {
      const { items, title } = accordionDatum;
      if (getLastIndexOfSubstringIgnoreCase(title, query) >= 0) {
        filteredAccordionDataAccum.push({
          ...accordionDatum,
          title: highlightSubstring(title, query),
          items: highlightItems(items, query),
        });
      } else {
        const filteredItems = items.filter(
          ({ label }) => getLastIndexOfSubstringIgnoreCase(label, query) >= 0
        );
        if (filteredItems.length > 0) {
          filteredAccordionDataAccum.push({
            ...accordionDatum,
            items: highlightItems(filteredItems, query),
          });
        }
      }
      return filteredAccordionDataAccum;
    },
    []
  );
  return filteredAccordionData;
};

const AccordionSearch = ({
  accordionData,
  placeholder,
  onSelect,
  selected,
  searchInputWidth,
  columns,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredAccordionData, setFilteredAccordionData] = useState([]);

  useEffect(() => {
    const filteredData = filterAccordionData(accordionData, inputValue.trim());
    setFilteredAccordionData(filteredData);
  }, [accordionData, inputValue]);

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
  const searchInputStyle = {};
  if (searchInputWidth) {
    searchInputStyle.width = searchInputWidth;
  }
  return (
    <>
      <div style={searchInputStyle}>
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

AccordionSearch.propTypes = {
  /**
   * An array of objects each of which is used to populate an accordion.
   */
  accordionData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          id: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
  /**
   * String used to fill in the search input when empty
   */
  placeholder: PropTypes.string,
  /**
   * Callback that is fired when an accordion's item is selected
   */
  onSelect: PropTypes.func.isRequired,
  /**
   * Array of the selected items' IDs
   */
  selected: PropTypes.arrayOf(PropTypes.object).isRequired,
  /**
   * The width of the text input box
   */
  searchInputWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * A boolean indicating whether the component should span multiple
   * columns: 2 columns for medium to 3 columns for large+ screens.
   */
  columns: PropTypes.bool,
};

AccordionSearch.defaultProps = {
  placeholder: '',
  searchInputWidth: '18rem',
  columns: false,
};

export default AccordionSearch;
