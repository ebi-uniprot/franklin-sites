import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import DropdownButton from './dropdown-button';

import '../styles/components/header.scss';
import '../styles/components/dropdown.scss';

const HeaderLink = ({ link }) => {
  if (link.path && link.href) {
    throw new Error('Only specify "path" or "href" not both.');
  }
  return (
    <>
      {link.path ? (
        <Link to={link.path} className="button tertiary">
          {link.label}
        </Link>
      ) : (
        <a
          href={link.href}
          className="button tertiary"
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.label}
        </a>
      )}
    </>
  );
};

const linkProp = PropTypes.shape({
  label: PropTypes.string,
  path: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      pathname: PropTypes.string,
      search: PropTypes.string,
      hash: PropTypes.string,
      state: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    }),
  ]),
  href: PropTypes.string,
});

HeaderLink.propTypes = {
  link: linkProp.isRequired,
};

const Header = ({ logo, links, search, isNegative, className, ...rest }) => (
  <div
    className={cn('header', { 'header--negative': isNegative }, className)}
    {...rest}
  >
    <div className="header__logo">
      <Link to="/">{logo}</Link>
    </div>
    <ul className="header__navigation">
      {links.map((link) => (
        <li key={link.label}>
          {link.links ? (
            <DropdownButton
              label={link.label}
              className={cn({
                'dropdown-container__trigger--negative': isNegative,
              })}
              openOnHover
            >
              <ul>
                {link.links.map((link2) => (
                  <li key={link2.label}>
                    <HeaderLink link={link2} />
                  </li>
                ))}
              </ul>
            </DropdownButton>
          ) : (
            <HeaderLink link={link} />
          )}
        </li>
      ))}
    </ul>
    <div className="header__search">{search}</div>
  </div>
);

Header.propTypes = {
  logo: PropTypes.element,
  links: PropTypes.arrayOf(linkProp),
  search: PropTypes.element,
  isNegative: PropTypes.bool,
  className: PropTypes.string,
};

Header.defaultProps = {
  logo: undefined,
  links: [],
  search: undefined,
  isNegative: false,
  className: '',
};

export default Header;
