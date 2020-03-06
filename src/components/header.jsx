import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/components/header.scss';
import '../styles/components/dropdown.scss';

const Header = ({ logo, links, search, isNegative }) => (
  <div className={isNegative ? 'header header--negative' : 'header'}>
    <div className="header__logo">
      <Link to="/">{logo}</Link>
    </div>
    <ul className="header__navigation">
      {links.map(link =>
        link.links ? (
          <li
            className="dropdown-container dropdown-container--hover"
            key={link.label}
          >
            <span
              className={
                isNegative
                  ? 'dropdown-container__trigger dropdown-container__trigger--negative'
                  : 'dropdown-container__trigger'
              }
            >
              {link.label}
            </span>
            <div className="dropdown-menu">
              <ul>
                {link.links.map(link2 => (
                  <li key={link2.label}>
                    <Link to={link2.path}>{link2.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ) : (
          <li key={link.label}>
            <Link to={link.path}>{link.label}</Link>
          </li>
        )
      )}
    </ul>
    <div className="header__search">{search}</div>
  </div>
);

Header.propTypes = {
  logo: PropTypes.element,
  links: PropTypes.arrayOf(PropTypes.object),
  search: PropTypes.element,
  isNegative: PropTypes.bool,
};

Header.defaultProps = {
  logo: undefined,
  links: [],
  search: undefined,
  isNegative: false,
};

export default Header;
