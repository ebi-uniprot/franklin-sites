import { getFlattenedPaths, getLastIndexOfSubstringIgnoreCase } from '../src/utils';
import { treeData } from '../src/app/common/tree-data';

test('should get all paths', () => {
  const path = getFlattenedPaths(treeData);
  expect(path).toEqual([
    [
      {
        label: 'Item 1',
        value: 'item_1',
      },
      {
        label: 'Item 1a',
        value: 'item_1a',
      },
    ],
    [
      {
        label: 'Item 1',
        value: 'item_1',
      },
      {
        label: 'Item 1b',
        value: 'item_1b',
      },
      {
        label: 'Item 1b A',
        value: 'item_1b_A',
      },
    ],
    [
      {
        label: 'Item 1',
        value: 'item_1',
      },
      {
        label: 'Item 1b',
        value: 'item_1b',
      },
      {
        label: 'Item 1b B',
        value: 'item_1b_B',
      },
    ],
    [
      {
        label: 'Some Item 2',
        value: 'item_2',
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
        value: 'item_1',
      },
      {
        label: 'Item 1b',
        value: 'item_1b',
      },
      {
        label: 'Item 1b B',
        value: 'item_1b_B',
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
