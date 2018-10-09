import getFlattenedPaths from '../src/utils';
import treeData from '../src/app/common/tree-data';

test('should get all paths', () => {
  const path = getFlattenedPaths(treeData);
  expect(path).toEqual([
    [{ label: 'Item 1' }, { label: 'Item 1 a' }],
    [{ label: 'Item 1' }, { label: 'Item 1 b' }, { label: 'Item 1b A' }],
    [{ label: 'Item 1' }, { label: 'Item 1 b' }, { label: 'Item 1b B' }],
    [{ label: 'Some Item 2' }],
  ]);
});

test('should find the correct path', () => {
  const path = getFlattenedPaths(treeData, 'Item 1b B');
  expect(path).toEqual([
    [
      {
        label: 'Item 1',
      },
      {
        label: 'Item 1 b',
      },
      {
        label: 'Item 1b B',
      },
    ],
  ]);
});

test('should not find any paths', () => {
  const path = getFlattenedPaths(treeData, 'The unfindable');
  expect(path).toEqual([]);
});
