import React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '../svg/search.svg';
import '../styles/components/search-input.scss';

const SearchInput = props => (
  <span className="search-input">
    <input type="text" {...props} />
    <SearchIcon className="search-input__icon" width={14} height={14} />
  </span>
);

SearchInput.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  props: PropTypes.object,
};

SearchInput.defaultProps = {
  props: {},
};

export default SearchInput;
