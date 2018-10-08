import React from 'react';
import PropTypes from 'prop-types';
import '../../dist/components/header.css';

const Header = ({ children }) => <div className="header">{children}</div>;

Header.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Header;
