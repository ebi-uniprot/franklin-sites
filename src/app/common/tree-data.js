import { getFlattenedPaths, getSquashedArrayOfPaths } from '../../utils';

export const treeData = [{
  label: 'Item 1',
  term: 'item_1',
  items: [{
    label: 'Item 1a',
    term: 'item_1a',
  }, {
    label: 'Item 1b',
    term: 'item_1b',
    items: [{
      label: 'Item 1b A',
      term: 'item_1b_A',
    }, {
      label: 'Item 1b B',
      term: 'item_1b_B',
    }],
  }],
}, {
  label: 'Some Item 2',
  term: 'item_2',
}];

export const flattenedPaths = getSquashedArrayOfPaths(getFlattenedPaths(treeData));
