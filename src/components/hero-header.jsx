import React from 'react';
import PropTypes from 'prop-types';
import '../../dist/components/header.css';

const HeroHeader = ({ title, children, footer }) => (
  <div className="hero-header">
    <div className="hero-header__title">
      <h1>{title}</h1>
    </div>
    <div className="hero-header__content">{children}</div>
    <div className="hero-header__footer">{footer}</div>
  </div>
);

HeroHeader.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
  footer: PropTypes.string,
};

HeroHeader.defaultProps = {
  title: '',
  footer: '',
};

export default HeroHeader;
