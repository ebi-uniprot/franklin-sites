import React from 'react';
import PropTypes from 'prop-types';
import DropdownButton from './dropdown-button';
import '../styles/components/main-search.scss';

const MainSearch = ({
  searchTerm = '',
  namespaces = [],
  onChange,
  onSubmit,
}) => (
  <form onSubmit={onSubmit} className="main-search" data-testid="main-search-form">
    {namespaces.length > 0 &&
      <DropdownButton label="UniProtKB">
        <ul>
          {namespaces.map(ns => (
            <li>
              <button type="button">{ns}</button>
            </li>
          ))}
        </ul>
      </DropdownButton>
    }
    <input
      type="text"
      className="main-search__input"
      data-testid="main-search-input"
      onChange={e => onChange(e.target.value)}
      value={searchTerm}
    />
    <button type="submit" className="button">
      Search
    </button>
  </form>
);

MainSearch.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  searchTerm: PropTypes.string,
  namespaces: PropTypes.arrayOf(PropTypes.string),
};

MainSearch.defaultProps = {
  searchTerm: '',
  namespaces: [],
};

export default MainSearch;
