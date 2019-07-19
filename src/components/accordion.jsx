import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/components/accordion.scss';
import ChevronDown from '../svg/chevron-down.svg';
import ChevronUp from '../svg/chevron-up.svg';

const chevronSize = 16;
const Accordion = ({ title, count, children }) => {
  const [showContent, setShowContent] = useState(false);
  const toggleShowContent = () => {
    setShowContent(!showContent);
  };
  const handleKeyPress = (key) => {
    if (key.key === 'Enter') {
      toggleShowContent();
    }
  };
  return (
    <div className="accordion">
      <div
        data-testid="accordion-title"
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
        data-testid="accordion-content"
        className={`accordion__content ${
          showContent ? 'accordion__content--display-content' : 'accordion__content--hide-content'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

// title, count, children

Accordion.propTypes = {
  /**
   * The title, works as a trigger to open/close
   */
  title: PropTypes.string.isRequired,
  /**
   * Number displayed at the right of the accordion. This could, for example, be used to inform
     the user how many checkboxes have selected in the accodion's hidden content.
   */
  count: PropTypes.number,
  /**
   * Content revealed on toggle
   */
  children: PropTypes.node.isRequired,
};

Accordion.defaultProps = {
  count: 0,
};

export default Accordion;
