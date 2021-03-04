/* eslint-disable no-multi-spaces */
import { render } from '@testing-library/react';

import {
  getFlattenedPaths,
  getLastIndexOfSubstringIgnoreCase,
  restructureFlattenedTreeDataForAutocomplete,
  restructureFlattenedTreeItemsForAutocomplete,
  highlightSubstring,
  capitaliseFirstLetter,
  tidyUrlString,
} from '../utils';

import { treeData } from '../mock-data/tree-data';

test('should get all paths', () => {
  const path = getFlattenedPaths(treeData);
  expect(path).toEqual([
    [
      {
        label: 'Item 1',
        id: 'item_1',
      },
      {
        label: 'Item 1a',
        id: 'item_1a',
      },
    ],
    [
      {
        label: 'Item 1',
        id: 'item_1',
      },
      {
        label: 'Item 1b',
        id: 'item_1b',
      },
      {
        label: 'Item 1b A',
        id: 'item_1b_A',
      },
    ],
    [
      {
        label: 'Item 1',
        id: 'item_1',
      },
      {
        label: 'Item 1b',
        id: 'item_1b',
      },
      {
        label: 'Item 1b B',
        id: 'item_1b_B',
      },
    ],
    [
      {
        label: 'Some Item 2',
        id: 'item_2',
      },
    ],
  ]);
});

test('should find the correct path', () => {
  const path = getFlattenedPaths(treeData, 'item_1b_B');
  expect(path).toEqual([
    [
      {
        label: 'Item 1',
        id: 'item_1',
      },
      {
        label: 'Item 1b',
        id: 'item_1b',
      },
      {
        label: 'Item 1b B',
        id: 'item_1b_B',
      },
    ],
  ]);
});

test('should not find any paths', () => {
  const path = getFlattenedPaths(treeData, 'The unfindable');
  expect(path).toEqual([]);
});

test('should find the index of the last substring', () => {
  const index = getLastIndexOfSubstringIgnoreCase('StringSTRING', 'String');
  expect(index).toEqual(6);
});

test('should not find the index of the last string', () => {
  const index = getLastIndexOfSubstringIgnoreCase('StringSTRING', 'unfindable');
  expect(index).toEqual(-1);
});

test('should prepare all tree data for autocomplete', () => {
  const flatPaths = getFlattenedPaths(treeData);
  const data = restructureFlattenedTreeDataForAutocomplete(flatPaths);
  expect(data).toEqual([
    {
      id: 'item_1a',
      pathLabel: 'Item 1 / Item 1a',
      itemLabel: 'Item 1a',
    },
    {
      id: 'item_1b_A',
      pathLabel: 'Item 1 / Item 1b / Item 1b A',
      itemLabel: 'Item 1b A',
    },
    {
      id: 'item_1b_B',
      pathLabel: 'Item 1 / Item 1b / Item 1b B',
      itemLabel: 'Item 1b B',
    },
    {
      id: 'item_2',
      pathLabel: 'Some Item 2',
      itemLabel: 'Some Item 2',
    },
  ]);
});

test('should prepare flattened tree data items for autocomplete', () => {
  const items = [
    {
      label: 'Item 1',
      id: 'item_1',
    },
    {
      label: 'Item 1a',
      id: 'item_1a',
    },
  ];
  const data = restructureFlattenedTreeItemsForAutocomplete(items);
  expect(data).toEqual({
    id: 'item_1a',
    pathLabel: 'Item 1 / Item 1a',
    itemLabel: 'Item 1a',
  });
});

describe('capitaliseFirstLetter', () => {
  expect(capitaliseFirstLetter(null)).toBe(null);
  expect(capitaliseFirstLetter('')).toBe('');
  expect(capitaliseFirstLetter('a')).toBe('A');
  expect(capitaliseFirstLetter('A')).toBe('A');
  expect(capitaliseFirstLetter('hello')).toBe('Hello');
  expect(capitaliseFirstLetter('Hello')).toBe('Hello');
});

describe('highlightSubstring', () => {
  const string = 'Item 1 / Item 1a';
  test('should highlight substring (case insensitive', () => {
    const { asFragment } = render(
      highlightSubstring(string, 'item 1') as JSX.Element
    );
    expect(asFragment()).toMatchSnapshot();
  });
  test('should return string if no substring found', () => {
    expect(highlightSubstring(string, 'zap')).toEqual(string);
  });
});

describe('tidyUrlString', () => {
  it('should remove http://wwww and any trailing slashes', () => {
    expect(tidyUrlString('http://www.ebi.ac.uk//')).toEqual('ebi.ac.uk');
  });
  it('should remove https', () => {
    expect(tidyUrlString('https://ebi.ac.uk')).toEqual('ebi.ac.uk');
  });
  it('should remove www', () => {
    expect(tidyUrlString('www.ebi.ac.uk')).toEqual('ebi.ac.uk');
  });
  it('should leave forward slashes in the middle of the url', () => {
    expect(tidyUrlString('https://www.ebi.ac.uk/uniprot/TrEMBLstats')).toEqual(
      'ebi.ac.uk/uniprot/TrEMBLstats'
    );
  });
  it('should return the same url if it is already tidy', () => {
    expect(tidyUrlString('ebi.ac.uk')).toEqual('ebi.ac.uk');
  });
  it('should handle a schema-relative URL', () => {
    expect(tidyUrlString('//www.ebi.ac.uk/')).toEqual('ebi.ac.uk');
  });
});
