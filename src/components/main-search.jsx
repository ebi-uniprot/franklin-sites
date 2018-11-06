import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../dist/components/main-search.css';
import '../../dist/components/dropdown.css';

const showDropdown = true;

const MainSearch = () => (
  <div className="main-search">
    <div className="dropdown-container">
      <button id="namespace-selector" type="button" className="button dropdown">
        UniProtKB
      </button>
      <div className={showDropdown ? 'dropdown-menu dropdown-menu-open' : 'dropdown-menu'}>
        This is some content
      </div>
    </div>
    <input type="text" className="main-search__input" />
    <button type="button" className="button">
      Search
    </button>
  </div>
);

MainSearch.propTypes = {
  searchAction: PropTypes.func,
  namespace: PropTypes.string,
};

MainSearch.defaultProps = {};

export default MainSearch;
