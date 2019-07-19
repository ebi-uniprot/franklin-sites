import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/components/accordion.scss';
import ChevronDown from '../svg/chevron-down.svg';
import ChevronUp from '../svg/chevron-up.svg';

const chevronSize = 20;
const Accordion = ({ title, count, children }) => {
  const [showContent, setShowContent] = useState(false);
  const toggleShowContent = () => {
    setShowContent(!showContent);
  };
  const handleKeyPress = (key) => {
    if (key === 'Enter') {
      toggleShowContent();
    }
  };
  return (
    <div className="accordion">
      <div
        role="button"
        tabIndex={0}
        className="accordion__title"
        onClick={() => toggleShowContent()}
        onKeyPress={key => handleKeyPress(key)}
      >
        <div className="accordion__title__text">{title}</div>
        <div className="accordion__title__side">
          {count > 0 && count}
          {showContent ? (
            <ChevronUp
              width={chevronSize}
              height={chevronSize}
              className="accordion__title__side__chevron"
            />
          ) : (
            <ChevronDown
              width={chevronSize}
              height={chevronSize}
              className="accordion__title__side__chevron"
            />
          )}
        </div>
      </div>
      <div
        className={`accordion__content ${
          showContent ? 'accordion__content--display-content' : 'accordion__content--hide-content'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

// PageIntro.propTypes = {
//   /**
//    * The title, works as a trigger to open/close
//    */
//   title: PropTypes.string.isRequired,
//   /**
//    * Number of results
//    */
//   resultsCount: PropTypes.number,
//   /**
//    * Content revealed on toggle
//    */
//   children: PropTypes.node.isRequired,
//   /**
//    * Links revealed on toggle
//    */
//   links: PropTypes.arrayOf(PropTypes.shape({})),
// };

// PageIntro.defaultProps = {
//   resultsCount: 0,
//   links: [],
// };

export default Accordion;
