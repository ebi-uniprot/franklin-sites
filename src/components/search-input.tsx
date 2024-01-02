import {
  useRef,
  FC,
  KeyboardEvent,
  ChangeEventHandler,
  ChangeEvent,
  InputHTMLAttributes,
} from 'react';

import { SearchIcon, SpinnerIcon, CloseIcon } from '.';

import '../styles/components/search-input.scss';

type Props = {
  /**
   * The value to display in the text input.
   */
  value?: string;
  /**
   * Value change callback for the text input component.
   */
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /**
   * Key pressed callback for the text input component.
   */
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  /**
   * Text to place in the text input component in the absence of value.
   */
  placeholder?: string;
  /**
   * Text to place in the text input component in the absence of value.
   */
  isLoading?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const SearchInput: FC<Props> = ({
  value,
  onChange,
  onKeyDown,
  placeholder,
  isLoading = false,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSuffixInteraction = () => {
    inputRef?.current?.focus();
    if (value && !isLoading) {
      onChange?.({ target: { value: '' } } as ChangeEvent<HTMLInputElement>);
    }
  };

  let icon;
  if (isLoading) {
    icon = <SpinnerIcon width={14} height={14} />;
  } else if (value) {
    icon = <CloseIcon width={14} height={14} />;
  } else {
    icon = <SearchIcon width={14} height={14} />;
  }

  return (
    <span className="search-input">
      <input
        data-testid="search-input"
        type="search"
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
        onKeyPress={handleSuffixInteraction}
        onClick={handleSuffixInteraction}
      >
        {icon}
      </span>
    </span>
  );
};

export default SearchInput;
