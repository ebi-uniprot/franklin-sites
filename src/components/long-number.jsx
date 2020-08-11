import React from 'react';
import PropTypes from 'prop-types';
import { formatLargeNumber } from '../utils';

const LongNumber = ({ children }) => <>{formatLargeNumber(children)}</>;

LongNumber.propTypes = {
  /**
   * The number to format
   */
  children: PropTypes.number.isRequired,
};

export default LongNumber;
