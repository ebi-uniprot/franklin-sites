import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/bubble.scss';

const Bubble = ({ value, size, colourClass }) => {
  let displayValue = Math.round(value * 10) / 10;
  if (value > 99) {
    displayValue = '99+';
  }
  return <span className={`bubble--${size} ${colourClass}`}>{displayValue}</span>;
};

Bubble.propTypes = {
  /**
   * The number to display
   */
  value: PropTypes.number.isRequired,
  /**
   * The class name of the colour to use (optional)
   */
  colourClass: PropTypes.string,
  /**
   * The bubble size (default is medium)
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Bubble.defaultProps = {
  colourClass: 'colour-uniprot-blue',
  size: 'medium',
};

export default Bubble;
