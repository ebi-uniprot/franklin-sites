import React, { createRef, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import '../styles/components/dropdown.scss';

const DropdownButton = ({ children, label, className }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [buttonHeight, setButtonHeight] = useState(0);
  const buttonRef = createRef();
  const containerRef = createRef();

  const handleClick = useCallback(
    e => {
      if (containerRef.current && containerRef.current.contains(e.target)) {
        return;
      }
      setShowMenu(false);
    },
    [containerRef]
  );

  useEffect(() => {
    if (buttonRef.current) {
      const { height } = buttonRef.current.getBoundingClientRect();
      setButtonHeight(height);
    }
    if (containerRef.current) {
      document.addEventListener('mousedown', handleClick, false);
    }
    const cleanUp = () => {
      document.removeEventListener('mousedown', handleClick);
    };
    return cleanUp;
  }, [buttonRef, containerRef, handleClick]);

  return (
    <div className="dropdown-container" ref={containerRef}>
      <button
        type="button"
        className={`button dropdown ${className}`}
        onClick={() => setShowMenu(!showMenu)}
        ref={buttonRef}
      >
        {label}
      </button>
      <div
        className={
          showMenu ? 'dropdown-menu dropdown-menu-open' : 'dropdown-menu'
        }
        style={{ top: buttonHeight }}
      >
        {children}
      </div>
    </div>
  );
};

DropdownButton.propTypes = {
  /**
   * Content revealed on click
   */
  children: PropTypes.instanceOf(Object).isRequired,
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
