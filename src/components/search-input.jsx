import { useRef } from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '../svg/search.svg';
import SpinnerIcon from '../svg/spinner.svg';
import '../styles/components/search-input.scss';

const SearchInput = ({
  value,
  onChange,
  onKeyDown,
  placeholder,
  isLoading = false,
  ...props
}) => {
  const inputRef = useRef();
  const focusOnInput = () => {
    inputRef.current.focus();
  };
  return (
    <span className="search-input">
      <input
        data-testid="search-input"
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        ref={inputRef}
        {...props}
      />
      <span
        data-testid="search-input-suffix"
        role="presentation"
        className="search-input__suffix"
        onKeyPress={focusOnInput}
        onClick={focusOnInput}
      >
        {isLoading ? (
          <SpinnerIcon width={14} height={14} />
        ) : (
          <SearchIcon width={14} height={14} />
        )}
      </span>
    </span>
  );
};

SearchInput.propTypes = {
  /**
   * The value to display in the text input.
   */
  value: PropTypes.string,
  /**
   * Value change callback for the text input component.
   */
  onChange: PropTypes.func,
  /**
   * Key pressed callback for the text input component.
   */
  onKeyDown: PropTypes.func,
  /**
   * Text to place in the text input component in the absence of value.
   */
  placeholder: PropTypes.string,
  /**
   * Text to place in the text input component in the absence of value.
   */
  isLoading: PropTypes.bool,
};

SearchInput.defaultProps = {
  value: undefined,
  onChange: undefined,
  onKeyDown: undefined,
  placeholder: undefined,
  isLoading: false,
};

export default SearchInput;
