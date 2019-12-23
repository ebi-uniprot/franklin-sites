import React, { useState } from 'react';
import PropTypes from 'prop-types';

const StateDecorator = ({ children, ...props }) => {
  const [state, setState] = useState({});
  return <div {...props}>{children(state, setState)}</div>;
};

StateDecorator.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StateDecorator;
