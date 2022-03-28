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
    expect(searchInput).toHaveValue(value);
  });

  it('should clear on Enter if clearOnSelect is passed', () => {
    const onSelect = jest.fn();
    render(
      <Autocomplete data={flattenedPaths} onSelect={onSelect} clearOnSelect />
    );
    const searchInput = screen.getByTestId('search-input');
    const value = 'foo';
    fireEvent.change(searchInput, { target: { value } });
    fireEvent.keyDown(searchInput, { key: 'Enter', code: 'Enter' });
    expect(searchInput).toHaveValue('');
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
  it('should filter options when a tag is provided', () => {
    const options = [
      {
        pathLabel: 'Do not find this',
      },
      {
        pathLabel: 'Also do not find this',
      },
      {
        pathLabel: 'Find this because it is tagged',
        tags: ['tagged'],
      },
    ];
    const filtered = filterOptions(options as AutocompleteItemType[], 'tagged');
    const expected = [
      {
        pathLabel: 'Find this because it is tagged',
        tags: ['tagged'],
      },
    ];
    expect(filtered).toEqual(expected);
  });
});

describe('shouldShowDropdown', () => {
  it('should return false if length of text input is less than minCharsToShowDropdown', () => {
    expect(shouldShowDropdown('fo', [], true, true, 3)).toBe(false);
  });

  it('should return true if text input is in options', () => {
    expect(shouldShowDropdown('Item', flattenedPaths, false, true, 3)).toBe(
      true
    );
  });

  it('should return true if filtering is not applied', () => {
    expect(shouldShowDropdown('Zzz', flattenedPaths, false, false, 3)).toBe(
      true
    );
  });
});
