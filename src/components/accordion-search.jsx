import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import Accordion from './accordion';
import SearchInput from './search-input';
import Loader from './loader';
import { getLastIndexOfSubstringIgnoreCase, highlightSubstring } from '../utils';
import '../styles/components/accordion-search.scss';

const highlightItems = (items, query) =>
  items.map(item => ({ ...item, label: highlightSubstring(item.label, query) }));

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
          ({ label }) => getLastIndexOfSubstringIgnoreCase(label, query) >= 0,
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
    [],
  );
  return filteredAccordionData;
};

const AccordionSearch = ({
  accordionData, placeholder, onSelect, selected, searchInputWidth,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredAccordionData, setFilteredAccordionData] = useState([]);

  useEffect(() => {
    setFilteredAccordionData(accordionData);
  }, [accordionData]);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
    const filteredData = filterAccordionData(accordionData, value.trim());
    setFilteredAccordionData(filteredData);
  };
  if (!accordionData || !accordionData.length) {
    return <Loader />;
  }
  let accordionGroupNode = <div>No matches found</div>;
  if (filteredAccordionData && filteredAccordionData.length) {
    accordionGroupNode = (
      <div className="accordion-group accordion-search">
        {filteredAccordionData.map(({ title, id: accordionId, items }) => {
          const accordionSelected = selected.filter(item => item.accordionId === accordionId);
          return (
            <Accordion
              title={title}
              key={accordionId}
              count={accordionSelected.length}
              alwaysOpen={!!inputValue}
            >
              <ul className=" accordion-search__list no-bullet">
                {items.map(({ label, id: itemId }) => (
                  <li key={itemId}>
                    <label key={itemId} htmlFor={`checkbox-${itemId}`}>
                      <input
                        type="checkbox"
                        id={`checkbox-${itemId}`}
                        className="accordion-search__list__item-checkbox"
                        onChange={() => onSelect(accordionId, itemId)}
                        checked={accordionSelected.some(item => item.itemId === itemId)}
                      />
                      {label}
                    </label>
                  </li>
                ))}
              </ul>
            </Accordion>
          );
        })}
      </div>
    );
  }
  const searchInputStyle = {};
  if (searchInputWidth) {
    searchInputStyle.width = searchInputWidth;
  }
  return (
    <Fragment>
      <div style={searchInputStyle}>
        <SearchInput
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder={placeholder}
        />
      </div>
      {accordionGroupNode}
    </Fragment>
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
        }),
      ),
    }),
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
  selected: PropTypes.arrayOf(PropTypes.string).isRequired,
  /**
   * The width of the text input box
   */
  searchInputWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

AccordionSearch.defaultProps = {
  placeholder: '',
  searchInputWidth: '18rem',
};

export default AccordionSearch;
