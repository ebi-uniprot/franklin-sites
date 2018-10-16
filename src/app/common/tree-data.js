import { getFlattenedPaths, getSquashedArrayOfPaths } from '../../utils';

export const treeData = [{
  label: 'Item 1',
  value: 'item_1',
  items: [{
    label: 'Item 1a',
    value: 'item_1a',
  }, {
    label: 'Item 1b',
    value: 'item_1b',
    items: [{
      label: 'Item 1b A',
      value: 'item_1b_A',
    }, {
      label: 'Item 1b B',
      value: 'item_1b_B',
    }],
  }],
}, {
  label: 'Some Item 2',
  value: 'item_2',
}];

export const flattenedPaths = getSquashedArrayOfPaths(getFlattenedPaths(treeData));
