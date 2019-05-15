import React from 'react';
import PropTypes from 'prop-types';
import InPageNav from '../../components/in-page-nav';

const SideBar = ({ sections }) => (
  <div className="sidebar">
    <InPageNav sections={sections} />
  </div>
);

SideBar.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SideBar;
