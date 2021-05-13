import { HTMLAttributes, SyntheticEvent, useMemo } from 'react';

import DropdownButton from './dropdown-button';
import Button from './button';

import color from '../styles/colours.json';

import { FranklinStyle } from '../types/common';

import '../styles/components/main-search.scss';

type MainSearchProps = {
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
} & HTMLAttributes<HTMLInputElement>;

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
      '--main-button-color':
        color[selectedNamespace as keyof typeof color] || color.seaBlue,
    }),
    [selectedNamespace]
  );

  return (
    <form
      onSubmit={onSubmit}
      aria-label="Main search"
      className="main-search"
      style={style}
    >
      {Object.keys(namespaces).length > 0 && onNamespaceChange && (
        <DropdownButton
          label={
            namespaces[
              // Pick the first item if nothing defined
              selectedNamespace || Object.keys(namespaces)[0]
            ]
          }
        >
          {(setShowMenu: (show: boolean) => void) => (
            <ul>
              {Object.keys(namespaces).map((key) => (
                <li key={key}>
                  <button
                    type="button"
                    onClick={() => {
                      setShowMenu(false);
                      onNamespaceChange(key);
                    }}
                  >
                    {namespaces[key]}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </DropdownButton>
      )}
      <div className="main-search__input">
        <input
          type="text"
          className="main-search__input"
          aria-label={`Text query${
            selectedNamespace ? ` in ${selectedNamespace}` : ''
          }`}
          onChange={(e) => onTextChange(e.target.value)}
          value={searchTerm}
          style={{
            paddingRight: secondaryButtons
              ? `${countCharacters(
                  secondaryButtons.map(({ label }) => label)
                )}ch`
              : '',
          }} // Actually take number of letters
          {...props}
        />
        {secondaryButtons && (
          <div className="main-search__secondary-container">
            {secondaryButtons.map(({ label, action }, i) => (
              <>
                {i > 0 && <small> | </small>}
                <button
                  type="button"
                  onClick={action}
                  key={label}
                  className="main-search--secondary"
                >
                  <small>{label}</small>
                </button>
              </>
            ))}
          </div>
        )}
      </div>
      <Button type="submit">Search</Button>
    </form>
  );
};

export default MainSearch;
