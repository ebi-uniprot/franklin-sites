import React, { useState, Fragment } from 'react';
// import PropTypes from 'prop-types';
import Accordion from './accordion';
import SearchInput from './search-input';
import { getLastIndexOfSubstringIgnoreCase, highlightSubstring } from '../utils';

const highlightItems = (items, query) => items.map(item =>
  ({ ...item, content: highlightSubstring(item.content, query) }));

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
          ({ content }) => getLastIndexOfSubstringIgnoreCase(content, query) >= 0,
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

const AccordionSearch = ({ accordionData, placeholder }) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredAccordionData, setFilteredAccordionData] = useState(accordionData);
  const [isFiltered, setIsFiltered] = useState(false);
  const [selected, setSelected] = useState(accordionData.reduce((accum, { id }) =>
    ({ ...accum, [id]: [] }), {}));

  const handleInputChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
    const [filteredData, filtered] = filterAccordionData(accordionData, value);
    setIsFiltered(filtered);
    setFilteredAccordionData(filteredData);
  };

  const toggleSelect = (groupId, itemId) => {
    if (selected[groupId].includes(itemId)) {
      setSelected({ ...selected, [groupId]: selected[groupId].filter(item => item !== itemId) });
    } else {
      setSelected({ ...selected, [groupId]: [...selected[groupId], itemId] });
    }
  };

  let accordionGroupNode = <div>no results</div>;
  if (filteredAccordionData && filteredAccordionData.length > 0) {
    accordionGroupNode = (
      <div className="accordion-group">
        {filteredAccordionData.map(({ title, id: accordionId, items }) => (
          <Accordion
            title={title}
            key={accordionId}
            count={selected[accordionId].length}
            alwaysOpen={isFiltered}
          >
            <ul className="no-bullet">
              {items.map(({ content, id: itemId }) => (
                <li key={itemId}>
                  <label key={itemId} htmlFor={`checkbox-${itemId}`}>
                    <input
                      type="checkbox"
                      id={`checkbox-${itemId}`}
                      style={{ marginBottom: 0 }}
                      onChange={() => toggleSelect(accordionId, itemId)}
                      checked={selected[accordionId].includes(itemId)}
                    />
                    {content}
                  </label>
                </li>
              ))}
            </ul>
          </Accordion>
        ))}

      </div>
    );
  }


  return (
    <Fragment>
      <SearchInput
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
      {accordionGroupNode}
    </Fragment>
  );
};

// AccordionSearch.propTypes = {
//   /**
//    * The title, works as a trigger to open/close
//    */
//   title: PropTypes.string.isRequired,
//   /**
//    * Number displayed at the right of the accordion. This could, for example, be used to inform
//      the user how many checkboxes have selected in the accodion's hidden content.
//    */
//   count: PropTypes.number,
//   /**
//    * Content revealed on toggle
//    */
//   children: PropTypes.node.isRequired,
// };

// AccordionSearch.defaultProps = {
//   count: 0,
// };

export default AccordionSearch;
