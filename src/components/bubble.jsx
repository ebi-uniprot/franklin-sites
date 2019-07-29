import React from 'react';
import '../styles/components/bubble.scss';

const Bubble = ({ value }) => {
  let displayValue = value;
  if (value > 99) {
    displayValue = '99+';
  }
  return <span className="bubble">{displayValue}</span>;
};

export default Bubble;
