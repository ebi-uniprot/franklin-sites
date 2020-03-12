import React from 'react';
import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';
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
          <HashLink to={`#${section.id}`}>{section.label}</HashLink>
        </li>
      ))}
    </Scrollspy>
  </div>
);

InPageNav.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default InPageNav;
