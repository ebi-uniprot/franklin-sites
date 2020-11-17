import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/header.scss';

const HeroHeader = ({ topLeft, topRight, title, children, footer }) => (
  <div className="hero-header">
    <div className="hero-header__top">
      <div className="hero-header__topLeft">{topLeft}</div>
      <div className="hero-header__topRight">{topRight}</div>
    </div>
    <div className="hero-header__title">
      <h1>{title}</h1>
    </div>
    <div className="hero-header__content">{children}</div>
    <div className="hero-header__footer">{footer}</div>
  </div>
);

HeroHeader.propTypes = {
  topLeft: PropTypes.element,
  topRight: PropTypes.element,
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
  footer: PropTypes.element,
};

HeroHeader.defaultProps = {
  topLeft: null,
  topRight: null,
  title: '',
  footer: null,
};

export default HeroHeader;
