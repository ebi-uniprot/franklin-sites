import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/components/page-intro.scss';
import ChevronDown from '../svg/chevron-down.svg';
import ChevronRight from '../svg/chevron-up.svg';

const chevronSize = 20;
const Accordion = ({ title, count, children }) => {
  const [showContent, setShowContent] = useState(false);
  return (
    <div className="page-intro">
      <h2>
        {title}
        <button type="button" onClick={() => setShowContent(!showContent)} className="dropdown">
          {showContent ? (
            <ChevronRight width={chevronSize} height={chevronSize} />
          ) : (
            <ChevronDown width={chevronSize} height={chevronSize} />
          )}
        </button>
        {count > 0 && <small>{count}</small>}
      </h2>
      <div className={`intro-content ${showContent && 'intro-content--display-content'}`}>
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
