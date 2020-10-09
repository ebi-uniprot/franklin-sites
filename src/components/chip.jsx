import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import RemoveIcon from '../svg/times.svg';

import '../styles/components/chip.scss';

const Chip = ({
  children,
  onRemove,
  className,
  disabled,
  compact,
  title,
  onClick,
  ...props
}) => {
  const handleClose = useCallback(
    (event) => {
      event.stopPropagation();
      onRemove(event);
    },
    [onRemove]
  );

  return (
    <button
      type="button"
      className={cn(
        'chip',
        { 'chip--disabled': disabled, 'chip--compact': compact },
        className
      )}
      title={title}
      onClick={onClick}
      disabled={disabled || !onClick}
      {...props}
    >
      {children}
      {onRemove && !disabled && (
        <RemoveIcon data-testid="remove-icon" onClick={handleClose} />
      )}
    </button>
  );
};

Chip.propTypes = {
  /**
   * What is displayed within the chip
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
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
  /**
   * Compact styling for chip
   */
  compact: PropTypes.bool,
  /**
   * Title to display on mouse over
   */
  title: PropTypes.string,
  /**
   * click event listener on the component (except on the close button if present)
   */
  onClick: PropTypes.func,
  /**
   * Optional extra props to pass to the chip
   */
  props: PropTypes.object, // eslint-disable-line react/forbid-prop-types, react/require-default-props
};

Chip.defaultProps = {
  onRemove: null,
  className: '',
  disabled: false,
  compact: false,
  title: null,
  onClick: undefined,
};

export default Chip;
