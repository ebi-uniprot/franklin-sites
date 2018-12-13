import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../dist/components/header.css';

const Header = ({
  logo, links, search, isNegative,
}) => (
  <div className={isNegative ? 'header header--negative' : 'header'}>
    <div className="header__logo">
      <Link to="/">{logo}</Link>
    </div>
    <ul className="header__navigation">
      {links.map(link => (
        <li key={link.label}>
          <Link to={link.path}>{link.label}</Link>
        </li>
      ))}
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
