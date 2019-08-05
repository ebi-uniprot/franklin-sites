import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { formatLargeNumber } from '../utils';

const LongNumber = ({ children }) => <Fragment>{formatLargeNumber(children)}</Fragment>;

LongNumber.propTypes = {
  /**
   * The number to format
   */
  children: PropTypes.number.isRequired,
};

export default LongNumber;
