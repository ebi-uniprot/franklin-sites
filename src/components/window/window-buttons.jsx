import React from 'react';
import PropTypes from 'prop-types';

import { getClassNames } from '../../utils';

import CloseIcon from '../../svg/times.svg';

export const WindowActionButton = ({
  icon,
  text,
  onClick,
  primary,
  className,
}) => {
  const baseClassName = 'window__action-button';
  const iconOnly = icon && !text;
  const cssClasses = getClassNames([
    baseClassName,
    [`${baseClassName}--icon-only`, iconOnly],
    ['button', !iconOnly],
    ['secondary', !iconOnly && !primary],
    [className, !!className],
  ]);

  return (
    <button className={cssClasses} onClick={onClick} type="button">
      {icon && icon}
      {text && text}
    </button>
  );
};

WindowActionButton.propTypes = {
  icon: PropTypes.node,
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  primary: PropTypes.bool,
  className: PropTypes.string,
};

WindowActionButton.defaultProps = {
  icon: null,
  text: null,
  primary: false,
  className: null,
};

export const DefaultCloseButton = ({
  iconOnly,
  text,
  onClick,
  ...otherProps
}) => {
  const baseClassName = 'window__default-close-button';
  const iconOnlyClass = `${baseClassName}--icon-only`;
  const cssClasses = getClassNames([
    baseClassName,
    [iconOnlyClass, !!iconOnly],
  ]);

  return (
    <WindowActionButton
      className={cssClasses}
      icon={iconOnly ? <CloseIcon width="10" height="10" /> : null}
      text={!iconOnly ? 'Close' : null}
      primary={!iconOnly}
      onClick={onClick}
      {...otherProps}
    />
  );
};

DefaultCloseButton.propTypes = {
  iconOnly: PropTypes.bool,
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

DefaultCloseButton.defaultProps = {
  iconOnly: false,
  text: null,
};

export default {
  WindowActionButton,
  DefaultCloseButton,
};
