import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '../svg/search.svg';
import '../styles/components/search-input.scss';

const SearchInput = ({
  value, onChange, onKeyDown, placeholder,
}) => {
  const inputRef = useRef();
  const focusOnInput = () => {
    inputRef.current.focus();
  };
  return (
    <span className="search-input">
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        ref={inputRef}
      />
      <span
        role="presentation"
        className="search-input__suffix"
        onKeyPress={focusOnInput}
        onClick={focusOnInput}
      >
        <SearchIcon width={14} height={14} />
      </span>
    </span>
  );
};

SearchInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  placeholder: PropTypes.string,
};

SearchInput.defaultProps = {
  value: undefined,
  onChange: undefined,
  onKeyDown: undefined,
  placeholder: undefined,
};

export default SearchInput;
