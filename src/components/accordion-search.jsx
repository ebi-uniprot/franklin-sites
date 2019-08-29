import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import Accordion from './accordion';
import SearchInput from './search-input';
import { getLastIndexOfSubstringIgnoreCase, highlightSubstring } from '../utils';
import '../styles/components/accordion-search.scss';

const highlightItems = (items, query) =>
  items.map(item => ({ ...item, label: highlightSubstring(item.label, query) }));

const filterAccordionData = (accordionData, query) => {
  let isFiltered = false;
  if (!query) {
    return [accordionData, isFiltered];
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
        isFiltered = true;
      } else {
        const filteredItems = items.filter(
          ({ label }) => getLastIndexOfSubstringIgnoreCase(label, query) >= 0,
        );
        if (filteredItems.length > 0) {
          filteredAccordionDataAccum.push({
            ...accordionDatum,
            items: highlightItems(filteredItems, query),
          });
          isFiltered = true;
        }
      }
      return filteredAccordionDataAccum;
    },
    [],
  );
  return [filteredAccordionData, isFiltered];
};

const AccordionSearch = ({
  accordionData, placeholder, onSelect, selected, inputWidth,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredAccordionData, setFilteredAccordionData] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    setFilteredAccordionData(accordionData);
  }, [accordionData]);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
    const [filteredData, filtered] = filterAccordionData(accordionData, value.trim());
    setIsFiltered(filtered);
    setFilteredAccordionData(filteredData);
  };
  if (!accordionData || !accordionData.length) {
    return <span>loading...</span>;
  }
  let accordionGroupNode = <div>no results</div>;
  if (filteredAccordionData && filteredAccordionData.length) {
    accordionGroupNode = (
      <div className="accordion-group">
        {filteredAccordionData.map(({ title, id: accordionId, items }) => {
          const accordionSelected = selected.filter(item => item.accordionId === accordionId);
          return (
            <Accordion
              title={title}
              key={accordionId}
              count={accordionSelected.length}
              alwaysOpen={isFiltered}
            >
              <ul className="no-bullet accordion-search__list">
                {items.map(({ label, id: itemId }) => (
                  <li key={itemId}>
                    <label key={itemId} htmlFor={`checkbox-${itemId}`}>
                      <input
                        type="checkbox"
                        id={`checkbox-${itemId}`}
                        className="accordion-search__list__item__checkbox"
                        onChange={() => onSelect(accordionId, itemId)}
                        checked={
                          accordionSelected.filter(item => item.itemId === itemId).length === 1
                        }
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
  const inputStyle = {};
  if (inputWidth) {
    inputStyle.width = inputWidth;
  }
  return (
    <Fragment>
      <div style={inputStyle}>
        <SearchInput
          type="text"
          value={inputValue}
          inputWidth={inputWidth}
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
      items: PropTypes.arrayOf([
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          id: PropTypes.string.isRequired,
        }),
      ]),
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
  inputWidth: PropTypes.number,
};

AccordionSearch.defaultProps = {
  placeholder: '',
  inputWidth: 300,
};

export default AccordionSearch;
