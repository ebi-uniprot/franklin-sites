import React from 'react';
import PropTypes from 'prop-types';

const SideBar = ({ children }) => (
  <div className="sidebar">
    <ul>{children}</ul>
  </div>
);

SideBar.propTypes = {
  children: PropTypes.node,
};

SideBar.defaultProps = {
  children: 'Sidebar content',
};

export default SideBar;
