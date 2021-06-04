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
      <Autocomplete data={flattenedPaths} onSelect={(d) => d} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render with props: showDropdownUpdated & clearOnSelect', () => {
    const { asFragment } = render(
      <Autocomplete
        data={flattenedPaths}
        onSelect={(d) => d}
        showDropdownUpdated={(d) => d}
        clearOnSelect
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should not submit if previously submitted text is the same as the current input text value', () => {
    const onSelect = jest.fn();
    render(<Autocomplete data={flattenedPaths} onSelect={onSelect} />);
    const searchInput = screen.getByTestId('search-input');
    const value = { target: { value: 'foo' } };
    fireEvent.change(searchInput, value);
    fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter' });
    fireEvent.change(searchInput, value);
    fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter' });
    expect(onSelect).toHaveBeenCalledTimes(1);
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
