import { getFlattenedPaths } from '../src/utils';
import { treeData } from '../src/app/common/tree-data';

test('should get all paths', () => {
  const path = getFlattenedPaths(treeData);
  expect(path).toEqual([
    [
      {
        label: 'Item 1',
        term: 'item_1',
      },
      {
        label: 'Item 1a',
        term: 'item_1a',
      },
    ],
    [
      {
        label: 'Item 1',
        term: 'item_1',
      },
      {
        label: 'Item 1b',
        term: 'item_1b',
      },
      {
        label: 'Item 1b A',
        term: 'item_1b_A',
      },
    ],
    [
      {
        label: 'Item 1',
        term: 'item_1',
      },
      {
        label: 'Item 1b',
        term: 'item_1b',
      },
      {
        label: 'Item 1b B',
        term: 'item_1b_B',
      },
    ],
    [
      {
        label: 'Some Item 2',
        term: 'item_2',
      },
    ],
  ]);
});

test('should find the correct path', () => {
  const path = getFlattenedPaths(treeData, 'Item 1b B');
  expect(path).toEqual([
    [
      {
        label: 'Item 1',
        term: 'item_1',
      },
      {
        label: 'Item 1b',
        term: 'item_1b',
      },
      {
        label: 'Item 1b B',
        term: 'item_1b_B',
      },
    ],
  ]);
});

test('should not find any paths', () => {
  const path = getFlattenedPaths(treeData, 'The unfindable');
  expect(path).toEqual([]);
});
