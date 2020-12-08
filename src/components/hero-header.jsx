import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/header.scss';

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
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  footer: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

HeroHeader.defaultProps = {
  title: '',
  footer: null,
};

export default HeroHeader;
