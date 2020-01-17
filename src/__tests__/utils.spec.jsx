/* eslint-disable no-multi-spaces */
import { render } from '@testing-library/react';
import {
  getFlattenedPaths,
  getLastIndexOfSubstringIgnoreCase,
  restructureFlattenedTreeDataForAutocomplete,
  restructureFlattenedTreeItemsForAutocomplete,
  fillArray,
  highlightSubstring,
  getClassNames,
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

test('should fill array with objects', () => {
  const array = fillArray(3, (element, index) => ({ index }));
  expect(array).toEqual([{ index: 0 }, { index: 1 }, { index: 2 }]);
});

describe('highlightSubstring', () => {
  const string = 'Item 1 / Item 1a';
  test('should highlight substring (case insensitive', () => {
    const { asFragment } = render(highlightSubstring(string, 'item 1'));
    expect(asFragment()).toMatchSnapshot();
  });
  test('should return string if no substring found', () => {
    expect(highlightSubstring(string, 'zap')).toEqual(string);
  });
});

describe('getClassNames', () => {
  test('should work with a string and an optional boolean value', () => {
    const sample = {
      zero: getClassNames('zero'),
      one: getClassNames('one', true),
      two: getClassNames('two', false),
    };
    const expectedResults = {
      zero: 'zero',
      one: 'one',
      two: '',
    };

    expect(sample).toEqual(expectedResults);
  });

  test('should work with a nested array of mixed input values', () => {
    const input = [
      'zero', // emited optional condition
      ['one', true], // standard format
      ['not-this-one', false], // should not be in the output
      ['two'], // emited optional condition
      [
        // nested array
        ['three', !!1], // casting truthy values to boolean
        ['four', () => true], // function call for the condition
      ],
    ];

    const expectedResults = 'zero one two three four';
    expect(getClassNames(input)).toBe(expectedResults);
  });
});
