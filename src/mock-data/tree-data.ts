import {
  getNodePaths,
  restructureFlattenedTreeDataForAutocomplete,
} from '../utils';

export const treeData = [
  {
    label: 'Item 1',
    id: 'item_1',
    tags: ['tag1'],
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
  {
    label: 'Another reaaaaalllllyyyyy looooooong Item 3',
    id: 'item_3',
    items: [
      {
        label: 'Item 3a (single child, open by default)',
        id: 'item_3a',
        items: [
          {
            label: 'Item 3a A',
            id: 'item_3a_A',
            tags: ['tag2', 'tag3'],
          },
          {
            label: 'Item 3a B',
            id: 'item_3a_B',
          },
        ],
      },
    ],
  },
];

const flatPaths = getNodePaths(treeData);
export const flattenedPaths =
  restructureFlattenedTreeDataForAutocomplete(flatPaths);
