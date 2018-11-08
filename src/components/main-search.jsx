import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from './select';
import '../../dist/components/main-search.css';

const showDropdown = true;

const MainSearch = () => (
  <div className="main-search">
    <Select label="UniProtKB">
      <ul>
        <li>
          <button>UniProtKB - the UniProt knowledgebase</button>
        </li>
        <li>
          <button>UniRef</button>
        </li>
        <li>
          <button>UniParc</button>
        </li>
        <li>
          <button>Proteomes</button>
        </li>
        <li>
          <button>Publications</button>
        </li>
        <li>
          <button>Keywords</button>
        </li>
      </ul>
    </Select>
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
