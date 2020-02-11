import React from 'react';
import PropTypes from 'prop-types';
import Scrollspy from 'react-scrollspy';
import '../styles/components/in-page-nav.scss';

const InPageNav = ({ sections }) => (
  <div className="in-page-nav">
    <Scrollspy
      items={sections.map(section => section.id)}
      currentClassName="in-page-nav--active"
    >
      {sections.map(section => (
        <li
          className={section.disabled && 'in-page-nav--disabled'}
          key={section.label}
        >
          <a href={`#${section.id}`}>{section.label}</a>
        </li>
      ))}
    </Scrollspy>
  </div>
);

InPageNav.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default InPageNav;
