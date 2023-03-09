import {
  getNodePaths,
  getLastIndexOfSubstringIgnoreCase,
  prepareTreeDataForAutocomplete,
  getSingleChildren,
  tidyUrlString,
  formatLargeNumber,
  formatBytesNumber,
} from '../utils';

import { treeData } from '../mock-data/tree-data';

it('should get all paths', () => {
  const paths = getNodePaths(treeData);
  expect(paths).toEqual([
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
        tags: ['tag2', 'tag3'],
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
        tags: ['tag2', 'tag3'],
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
    [
      {
        label: 'Another reaaaaalllllyyyyy looooooong Item 3',
        id: 'item_3',
      },
      {
        label: 'Item 3a (single child, open by default)',
        id: 'item_3a',
      },
      {
        label: 'Item 3a A',
        id: 'item_3a_A',
      },
    ],
    [
      {
        label: 'Another reaaaaalllllyyyyy looooooong Item 3',
        id: 'item_3',
      },
      {
        label: 'Item 3a (single child, open by default)',
        id: 'item_3a',
      },
      {
        label: 'Item 3a B',
        id: 'item_3a_B',
      },
    ],
  ]);
});

it('should find the correct path', () => {
  const path = getNodePaths(treeData, 'item_1b_B');
  expect(path).toEqual([
    [
      {
        label: 'Item 1',
        id: 'item_1',
      },
      {
        label: 'Item 1b',
        id: 'item_1b',
        tags: ['tag2', 'tag3'],
      },
      {
        label: 'Item 1b B',
        id: 'item_1b_B',
      },
    ],
  ]);
});

it('should not find any paths', () => {
  const path = getNodePaths(treeData, 'The unfindable');
  expect(path).toEqual([]);
});

it('should find the index of the last substring', () => {
  const index = getLastIndexOfSubstringIgnoreCase('StringSTRING', 'String');
  expect(index).toEqual(6);
});

it('should not find the index of the last string', () => {
  const index = getLastIndexOfSubstringIgnoreCase('StringSTRING', 'unfindable');
  expect(index).toEqual(-1);
});

it('should prepare all tree data for autocomplete', () => {
  const flatPaths = getNodePaths(treeData);
  const data = prepareTreeDataForAutocomplete(flatPaths);
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
      tags: ['tag2', 'tag3'],
    },
    {
      id: 'item_1b_B',
      pathLabel: 'Item 1 / Item 1b / Item 1b B',
      itemLabel: 'Item 1b B',
      tags: ['tag2', 'tag3'],
    },
    {
      id: 'item_2',
      pathLabel: 'Some Item 2',
      itemLabel: 'Some Item 2',
    },
    {
      id: 'item_3a_A',
      itemLabel: 'Item 3a A',
      pathLabel:
        'Another reaaaaalllllyyyyy looooooong Item 3 / Item 3a (single child, open by default) / Item 3a A',
    },
    {
      id: 'item_3a_B',
      itemLabel: 'Item 3a B',
      pathLabel:
        'Another reaaaaalllllyyyyy looooooong Item 3 / Item 3a (single child, open by default) / Item 3a B',
    },
  ]);
});

it('should yield single children from a tree of items', () => {
  expect(Array.from(getSingleChildren(treeData))).toEqual(['item_3a']);
});

describe('tidyUrlString', () => {
  it('should remove http:// and any trailing slashes', () => {
    expect(tidyUrlString('http://www.ebi.ac.uk//')).toEqual('www.ebi.ac.uk');
  });
  it('should remove https', () => {
    expect(tidyUrlString('https://ebi.ac.uk')).toEqual('ebi.ac.uk');
  });
  it('should retain www', () => {
    expect(tidyUrlString('www.ebi.ac.uk')).toEqual('www.ebi.ac.uk');
  });
  it('should leave forward slashes in the middle of the url', () => {
    expect(tidyUrlString('https://www.ebi.ac.uk/uniprot/TrEMBLstats')).toEqual(
      'www.ebi.ac.uk/uniprot/TrEMBLstats'
    );
  });
  it('should return the same url if it is already tidy', () => {
    expect(tidyUrlString('ebi.ac.uk')).toEqual('ebi.ac.uk');
  });
  it('should handle a schema-relative URL', () => {
    expect(tidyUrlString('//www.ebi.ac.uk/')).toEqual('www.ebi.ac.uk');
  });
});

describe('formatLargeNumber', () => {
  it.each([
    [1000, '1,000'],
    [-1000, '-1,000'],
    [999, '999'],
    [1000.0001, '1,000.0001'],
    [999.0001, '999.0001'],
    [0.0000001, '1e-7'],
  ])('.formatLargeNumber(%p)', (input: number, expected: string) => {
    expect(formatLargeNumber(input)).toBe(expected);
  });
});

describe('formatBytesNumber', () => {
  it.each([
    [1, 1, '1 Bytes'],
    [2000, 1, '2 KB'],
    [30000, 1, '29.3 KB'],
    [400000, 1, '390.6 KB'],
    [4372255, 1, '4.2 MB'], // Source macOS: ls -l vs ls -lh
    [5000000, 1, '4.8 MB'],
    [60000000, 1, '57.2 MB'],
    [700000000, 1, '667.6 MB'],
    [2621388791, 1, '2.4 GB'], // Source macOS: ls -l vs ls -lh
    [8000000000, 1, '7.5 GB'],
    [90000000000, 1, '83.8 GB'],
    [100000000000, 1, '93.1 GB'],
    [1100000000000, 1, '1 TB'],
    [12000000000000, 1, '10.9 TB'],
    [130000000000000, 1, '118.2 TB'],
    [1e30, 4, '827,180.6126 YB'], // If bigger than available prefix then use thousands
  ])(
    '.formatBytesNumber(%p, %p)',
    (bytes: number, decimals: number, expected: string) => {
      expect(formatBytesNumber(bytes, decimals)).toBe(expected);
    }
  );
});
