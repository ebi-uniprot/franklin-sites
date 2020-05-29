import React from 'react';
import PropTypes from 'prop-types';
import RemoveIcon from '../svg/times.svg';
import '../styles/components/chip.scss';

const Chip = ({ children, onRemove, className, disabled }) => (
  <span className={`chip ${disabled ? 'chip--disabled' : ''} ${className}`}>
    {children}
    {onRemove && !disabled && (
      <RemoveIcon data-testid="remove-icon" onClick={onRemove} />
    )}
  </span>
);

Chip.propTypes = {
  /**
   * What is displayed within the chip
   */
  children: PropTypes.node.isRequired,
  /**
   * Call back which, if present, will display a remove icon and is fired when this is clicked
   */
  onRemove: PropTypes.func,
  /**
   * If true will opacify the chip and prevent the remove from being clickable
   */
  disabled: PropTypes.bool,
  /**
   * Additional CSS classnames to apply (eg secondary, tertiary)
   */
  className: PropTypes.string,
};

Chip.defaultProps = {
  onRemove: null,
  className: '',
  disabled: false,
};

export default Chip;
