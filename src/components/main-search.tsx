import { SyntheticEvent, useMemo } from 'react';

import DropdownButton from './dropdown-button';
import Button from './button';

import color from '../styles/colours.json';

import { FranklinStyle } from '../types/common';

import '../styles/components/main-search.scss';

type MainSearchProps = {
  onSubmit: (e: SyntheticEvent) => void;
  onChange: (selectedValue: string) => void;
  searchTerm?: string;
  namespaces?: Record<string, string>;
  onNamespaceChange?: (namespace: string) => void;
  selectedNamespace?: string;
};

const MainSearch = ({
  searchTerm,
  namespaces = {},
  onChange,
  onSubmit,
  onNamespaceChange,
  selectedNamespace,
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
      className="main-search"
      data-testid="main-search-form"
      style={style}
    >
      {Object.keys(namespaces).length > 0 && onNamespaceChange && (
        <DropdownButton
          label={
            namespaces[
              // Pick the first item if nothing defined
              selectedNamespace || namespaces[Object.keys(namespaces)[0]]
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
      <input
        type="text"
        className="main-search__input"
        data-testid="main-search-input"
        aria-label={`Text query${
          selectedNamespace ? ` in ${selectedNamespace}` : ''
        }`}
        onChange={(e) => onChange(e.target.value)}
        value={searchTerm}
      />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default MainSearch;
