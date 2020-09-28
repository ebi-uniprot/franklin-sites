import PropTypes from 'prop-types';

import '../styles/index.scss';

const FranklinSite = ({ children }) => children;

FranklinSite.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default FranklinSite;
