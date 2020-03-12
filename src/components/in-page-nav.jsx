import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';
import Scrollspy from 'react-scrollspy';
import '../styles/components/in-page-nav.scss';

const InPageNav = ({ sections, rootElement }) => {
  const [loaded, setLoaded] = useState(false);
  const { hash } = window.location;

  useEffect(() => {
    /**
     * This is to handle the first page load. Check if there's a hash
     * and if so select the corresponding element and scroll to it
     * */
    const element = document.getElementById(decodeURI(hash.substring(1)));
    /**
     * We should poll here until the element exists or cancel after
     * a set amount of time
     */
    if (!loaded && element) {
      element.scrollIntoView();
      setLoaded(true);
    }
  }, [hash, loaded]);

  return (
    <div className="in-page-nav">
      <Scrollspy
        items={sections.map(section => section.id)}
        currentClassName="in-page-nav--active"
        rootEl={rootElement}
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
};

InPageNav.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.object).isRequired,
  rootElement: PropTypes.string,
};

InPageNav.defaultProps = {
  rootElement: null,
};

export default InPageNav;
