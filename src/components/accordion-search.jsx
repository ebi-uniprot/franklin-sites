import React, { useState, Fragment } from 'react';
// import PropTypes from 'prop-types';
import Accordion from './accordion';
import SearchInput from './search-input';
import { getLastIndexOfSubstringIgnoreCase } from '../utils';

const filterAccordionData = (accordionData, query) => {
  let isFiltered = false;
  if (!query) {
    return [accordionData, isFiltered];
  }
  const filteredAccordionData = accordionData.reduce(
    (filteredAccordionDataAccum, accordionDatum) => {
      const { items } = accordionDatum;
      const filteredItems = items.filter(
        ({ content }) => getLastIndexOfSubstringIgnoreCase(content, query) >= 0,
      );
      if (filteredItems.length > 0) {
        filteredAccordionDataAccum.push({ ...accordionDatum, items: filteredItems });
        isFiltered = true;
      }
      return filteredAccordionDataAccum;
    },
    [],
  );
  return [filteredAccordionData, isFiltered];
};

const AccordionSearch = ({ accordionData, placeholder }) => {
  // const [showContent, setShowContent] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [filteredAccordionData, setFilteredAccordionData] = useState(accordionData);
  const [isFiltered, setIsFiltered] = useState(false);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
    const [filteredData, filtered] = filterAccordionData(accordionData, value);
    setIsFiltered(filtered);
    setFilteredAccordionData(filteredData);
  };

  return (
    <Fragment>
      <SearchInput
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
      {
        filteredAccordionData && filteredAccordionData.length > 0
          ? filteredAccordionData.map(({ title, id: accordionId, items }) => (
            <Accordion title={title} key={accordionId} alwaysOpen={isFiltered}>
              <ul>
                {items.map(({ content, id: itemId }) => (
                  <li key={itemId}>{content}</li>
                ))}
              </ul>
            </Accordion>
          )) : <div>no results</div>
      }
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
