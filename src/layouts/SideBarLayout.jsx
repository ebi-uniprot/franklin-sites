import React from 'react';
import PropTypes from 'prop-types';

import '../styles/layouts/SideBarLayout.scss';

const SideBarLayout = ({ sidebar, children, invert }) => (
  <section
    className={`sidebar-layout ${invert && 'sidebar-layout--inverted'}`}
    data-layout="left-sidebar-layout"
  >
    <section className="sidebar-layout__sidebar">{sidebar}</section>
    <section className="sidebar-layout__content">{children}</section>
  </section>
);

SideBarLayout.propTypes = {
  sidebar: PropTypes.element.isRequired,
  children: PropTypes.element.isRequired,
  invert: PropTypes.bool,
};

SideBarLayout.defaultProps = {
  invert: false,
};

export default SideBarLayout;
