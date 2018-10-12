import React from 'react';
import PropTypes from 'prop-types';
// import '../../../../dist/_defaultPageContent.scss';

const DefaultPageContent = ({ children }) => <div className="default-page-content">{children}</div>;

DefaultPageContent.propTypes = {
  children: PropTypes.node,
};

DefaultPageContent.defaultProps = {
  children: 'Default Page Content',
};

export default DefaultPageContent;
