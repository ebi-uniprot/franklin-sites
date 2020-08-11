import React from 'react';
import PropTypes from 'prop-types';
import '../styles/index.scss';

const FranklinSite = ({ children }) => <>{children}</>;

FranklinSite.propTypes = {
  children: PropTypes.element.isRequired,
};

export default FranklinSite;
