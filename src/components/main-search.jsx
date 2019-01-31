import React from 'react';
import PropTypes from 'prop-types';
import DropdownButton from './dropdown-button';
import '../styles/components/main-search.scss';

const MainSearch = ({ searchTerm = '', onChange, onSubmit }) => (
  <form onSubmit={onSubmit} className="main-search">
    <DropdownButton label="UniProtKB">
      <ul>
        <li>
          <button type="button">UniProtKB - the UniProt knowledgebase</button>
        </li>
        <li>
          <button type="button">UniRef</button>
        </li>
        <li>
          <button type="button">UniParc</button>
        </li>
        <li>
          <button type="button">Proteomes</button>
        </li>
        <li>
          <button type="button">Publications</button>
        </li>
        <li>
          <button type="button">Keywords</button>
        </li>
      </ul>
    </DropdownButton>
    <input
      type="text"
      className="main-search__input"
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
};

MainSearch.defaultProps = {
  searchTerm: '',
};

export default MainSearch;
