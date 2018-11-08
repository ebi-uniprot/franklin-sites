import { getFlattenedPaths, restructureFlattenedTreeDataForAutocomplete } from '../../utils';

export const treeData = [
  {
    label: 'Item 1',
    id: 'item_1',
    items: [
      {
        label: 'Item 1a',
        id: 'item_1a',
      },
      {
        label: 'Item 1b',
        id: 'item_1b',
        items: [
          {
            label: 'Item 1b A',
            id: 'item_1b_A',
          },
          {
            label: 'Item 1b B',
            id: 'item_1b_B',
          },
        ],
      },
    ],
  },
  {
    label: 'Some Item 2',
    id: 'item_2',
  },
];

const flatPaths = getFlattenedPaths(treeData);
export const flattenedPaths = restructureFlattenedTreeDataForAutocomplete(flatPaths);
