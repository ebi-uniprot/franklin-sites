import React, { useRef, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Button from './button';

import '../styles/components/dropdown.scss';

const DropdownButton = ({
  children,
  label,
  className,
  openOnHover,
  ...props
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [size, setSize] = useState();

  const ref = useRef();
  const dropdownRef = useRef();

  const childType = typeof children;

  // effect to handle a click on anything closing the dropdown
  useEffect(() => {
    if (!showMenu) {
      return;
    }

    const listener = (event) => {
      if (
        !ref.current ||
        ref.current.parentElement.contains(event.target) ||
        (childType === 'function' && dropdownRef.current.contains(event.target))
      ) {
        return;
      }
      setShowMenu(false);
    };

    window.document.addEventListener('mouseup', listener);
    window.document.addEventListener('touchend', listener);
    // eslint-disable-next-line consistent-return
    return () => {
      window.document.removeEventListener('mouseup', listener);
      window.document.removeEventListener('touchend', listener);
    };
  }, [showMenu, childType]);

  useEffect(() => {
    if (ref.current && showMenu) {
      setSize(ref.current.getBoundingClientRect());
    }
  }, [showMenu]);

  const style = useMemo(() => {
    if (!size) {
      return undefined;
    }
    const availableHeight = window.innerHeight - size.bottom;
    return { top: size.height, maxHeight: availableHeight };
  }, [size]);

  return (
    <div
      className="dropdown-container"
      onBlur={(e) => setShowMenu(e.currentTarget.contains(e.relatedTarget))}
      onPointerEnter={openOnHover ? () => setShowMenu(true) : undefined}
      onPointerLeave={openOnHover ? () => setShowMenu(false) : undefined}
    >
      <Button
        className={cn('dropdown', className)}
        onClick={() => setShowMenu((showMenu) => !showMenu)}
        ref={ref}
        {...props}
      >
        {label}
      </Button>
      <div
        className={cn('dropdown-menu', {
          'dropdown-menu-open': showMenu,
        })}
        ref={dropdownRef}
        style={style}
      >
        {showMenu &&
          (childType === 'function' ? children(setShowMenu) : children)}
      </div>
    </div>
  );
};

DropdownButton.propTypes = {
  /**
   * Content revealed on click.
   */
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
  /**
   * Label to be display by the button
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  /**
   * Additional CSS classnames to apply to button
   */
  className: PropTypes.string,
  /**
   * Button variant to use
   */
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  /**
   * open on pointer over (useful for dropdowns in header)
   */
  openOnHover: PropTypes.bool,
};

DropdownButton.defaultProps = {
  className: undefined,
  openOnHover: undefined,
  variant: undefined,
};

export default DropdownButton;
