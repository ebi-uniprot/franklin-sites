import { getFlattenedPaths } from '../../utils';

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

function getSquashedPath(path, sep = ' / ') {
  const label = path.map(item => item.label).join(sep);
  const termPath = path.map(item => item.term);
  return {
    label,
    termPath,
  };
}

function getSquashedArrayOfPaths(paths) {
  return paths.map(path => getSquashedPath(path));
}

export const flattenedPaths = getSquashedArrayOfPaths(getFlattenedPaths(treeData));
