import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import '../styles/index.scss';

const FranklinSite = ({ children }) => <Fragment>{children}</Fragment>;

FranklinSite.propTypes = {
  children: PropTypes.element.isRequired,
};

export default FranklinSite;
