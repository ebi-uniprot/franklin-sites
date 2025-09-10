import {
  type CSSProperties,
  Fragment,
  type InputHTMLAttributes,
  type SyntheticEvent,
  useMemo,
} from 'react';

import { Dropdown } from './dropdown-button';
import Button from './button';

import type { FranklinStyle } from '../types/common';

import '../styles/components/main-search.scss';

interface InputInternalStyle extends CSSProperties {
  '--input-padding': string;
}

export type MainSearchProps = {
  /**
   * Action performed upon search submission
   */
  onSubmit: (e: SyntheticEvent) => void;
  /**
   * What happens when text is typed in the search box
   */
  onTextChange: (selectedValue: string) => void;
  /**
   * The search term
   */
  searchTerm?: string;
  /**
   * An object representing the different namespace options
   */
  namespaces?: Record<string, string>;
  /**
   * What happens when a namespace is changed in the dropdown
   */
  onNamespaceChange?: (namespace: string) => void;
  /**
   * The selected namespace in the dropdown
   */
  selectedNamespace?: string;
  /**
   * A list of objects representing secondary buttons and their actions
   */
  secondaryButtons?: { label: string; action: () => void }[];
} & InputHTMLAttributes<HTMLInputElement>;

const countCharacters = (items: string[]) =>
  items.reduce((prev, curr) => prev + curr.length, 0);

const MainSearch = ({
  searchTerm,
  namespaces = {},
  onTextChange,
  onSubmit,
  onNamespaceChange,
  selectedNamespace,
  secondaryButtons,
  ...props
}: MainSearchProps) => {
  const style = useMemo<FranklinStyle>(
    () => ({
      '--main-button-color': `var(--fr--color-${selectedNamespace}, var(--fr--color-sea-blue))`,
    }),
    [selectedNamespace]
  );

  const inputStyle = useMemo<InputInternalStyle | undefined>(() => {
    const count =
      secondaryButtons &&
      countCharacters(secondaryButtons.map(({ label }) => label));
    return count ? { '--input-padding': `${count}ch` } : undefined;
  }, [secondaryButtons]);

  const visibleElement = (onClick: () => unknown) => (
    <Button variant="primary" style={style} onClick={onClick}>
      {
        namespaces[
          // Pick the first item if nothing defined
          selectedNamespace || Object.keys(namespaces)[0]
        ]
      }
    </Button>
  );

  return (
    <form onSubmit={onSubmit} aria-label="Main search" className="main-search">
      {Object.keys(namespaces).length > 0 && onNamespaceChange && (
        <Dropdown
          visibleElement={visibleElement}
          propChangeToClose={selectedNamespace}
        >
          <ul className="no-bullet">
            {Object.keys(namespaces).map((key) => (
              <li key={key}>
                <Button
                  variant="tertiary"
                  onClick={() => {
                    onNamespaceChange(key);
                  }}
                >
                  {namespaces[key]}
                </Button>
              </li>
            ))}
          </ul>
        </Dropdown>
      )}
      <div className="main-search__input-container">
        <input
          type="search"
          aria-label={`Text query${
            selectedNamespace ? ` in ${selectedNamespace}` : ''
          }`}
          onChange={(e) => onTextChange(e.target.value)}
          value={searchTerm}
          style={inputStyle}
          {...props}
        />
        {secondaryButtons && (
          <div className="main-search__secondary-container">
            {secondaryButtons.map(({ label, action }, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Fragment key={index}>
                {index > 0 && <small> | </small>}
                <button
                  type="button"
                  onClick={action}
                  key={label}
                  className="main-search--secondary"
                >
                  <small>{label}</small>
                </button>
              </Fragment>
            ))}
          </div>
        )}
      </div>
      <Button type="submit">Search</Button>
    </form>
  );
};

export default MainSearch;
