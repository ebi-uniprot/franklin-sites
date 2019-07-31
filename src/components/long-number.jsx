import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { formatLargeNumber } from '../utils';

const LongNumber = ({ number }) => <Fragment>{formatLargeNumber(number)}</Fragment>;

LongNumber.propTypes = {
  /**
   * The number to format
   */
  number: PropTypes.number.isRequired,
};

export default LongNumber;
