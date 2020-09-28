import React, { useRef, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import '../styles/components/dropdown.scss';

const DropdownButton = ({ children, label, className }) => {
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
        ref.current.contains(event.target) ||
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
    <div className="dropdown-container">
      <button
        type="button"
        className={`button dropdown ${className}`}
        onClick={() => setShowMenu((showMenu) => !showMenu)}
        ref={ref}
      >
        {label}
      </button>
      <div
        className={cn('dropdown-menu', {
          'dropdown-menu-open': showMenu,
        })}
        ref={dropdownRef}
        style={style}
      >
        {childType === 'function' ? children(setShowMenu) : children}
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
   * Additional CSS classnames to apply to button (eg secondary, tertiary)
   */
  className: PropTypes.string,
};

DropdownButton.defaultProps = {
  className: '',
};

export default DropdownButton;
