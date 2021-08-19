import { screen, render, fireEvent } from '@testing-library/react';

import Autocomplete, {
  shouldShowDropdown,
  filterOptions,
} from '../autocomplete';

import { flattenedPaths } from '../../mock-data/tree-data';
import { AutocompleteItemType } from '../autocomplete-item';

describe('Autocomplete component', () => {
  it('should render', () => {
    const { asFragment } = render(
      <Autocomplete data={flattenedPaths} onSelect={jest.fn()} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render with props: onDropdownChange & clearOnSelect', () => {
    const { asFragment } = render(
      <Autocomplete
        data={flattenedPaths}
        onSelect={jest.fn()}
        onDropdownChange={(d) => d}
        clearOnSelect
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should submit current input text value', () => {
    const onSelect = jest.fn();
    render(<Autocomplete data={flattenedPaths} onSelect={onSelect} />);
    const searchInput = screen.getByTestId('search-input');
    const value = 'foo';
    fireEvent.change(searchInput, { target: { value } });
    fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter' });
    expect(onSelect).toHaveBeenCalledWith(value);
  });
});

describe('filterOptions', () => {
  it('should filter options', () => {
    const options = [
      {
        pathLabel: 'Find this',
      },
      {
        pathLabel: 'Also find this',
      },
      {
        pathLabel: 'You FIND this?!',
      },
      {
        pathLabel: 'Found nothing',
      },
      {
        pathLabel: '',
      },
    ];
    const filtered = filterOptions(options as AutocompleteItemType[], 'find');
    const expected = [
      {
        pathLabel: 'Find this',
      },
      {
        pathLabel: 'Also find this',
      },
      {
        pathLabel: 'You FIND this?!',
      },
    ];
    expect(filtered).toEqual(expected);
  });
});

describe('shouldShowDropdown', () => {
  it('should return false if length of text input is less than minCharsToShowDropdown', () => {
    expect(shouldShowDropdown('fo', [], true, true, 3)).toBe(false);
  });
});
