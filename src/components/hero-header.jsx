import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import '../styles/components/header.scss';

const HeroHeader = ({
  topLeft,
  topRight,
  title,
  children,
  footer,
  className,
  ...rest
}) => (
  <div className={cn('hero-header', className)} {...rest}>
    <div className="hero-header__top">
      <div>{topLeft}</div>
      <div>{topRight}</div>
    </div>
    <div className="hero-header__title">
      <h1>{title}</h1>
    </div>
    <div className="hero-header__content">{children}</div>
    <div className="hero-header__footer">{footer}</div>
  </div>
);

HeroHeader.propTypes = {
  topLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  topRight: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  footer: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

HeroHeader.defaultProps = {
  topLeft: null,
  topRight: null,
  title: '',
  footer: null,
};

export default HeroHeader;
