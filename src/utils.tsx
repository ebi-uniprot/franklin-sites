import { AutocompleteItemType } from './components/autocomplete-item';

export function getLastIndexOfSubstringIgnoreCase(
  string: string,
  substring: string
) {
  return string.toLowerCase().lastIndexOf(substring.toLowerCase());
}

export type BasicItem<Item> = {
  label: string;
  id: string;
  tags?: string[];
  items?: BasicItem<Item>[];
};

export const getNodePaths = <Item extends BasicItem<Item>>(
  items: Item[],
  id?: string,
  path: Item[] = []
) => {
  let nodePaths: Omit<Item, 'items'>[][] = [];
  items.forEach((node) => {
    const { items, ...thisNode } = node;
    const nodePath = [...path, thisNode];
    if (items) {
      const result = getNodePaths(items, id, nodePath) as Omit<
        Item,
        'items'
      >[][];
      if (result.length) {
        nodePaths = [...nodePaths, ...result];
      }
    } else if (!id || thisNode.id === id) {
      nodePaths = [...nodePaths, nodePath];
    }
  });
  return nodePaths;
};

export function prepareTreeDataForAutocomplete<Item extends BasicItem<Item>>(
  flattenedTreeData: Item[][]
) {
  return flattenedTreeData.map((items) => {
    const autocompleteItem: AutocompleteItemType = {
      id: items[items.length - 1].id,
      pathLabel: items.map((item) => item.label).join(' / '),
      itemLabel: items[items.length - 1].label,
    };
    const tags = items.flatMap((item) => item.tags || []);
    if (tags.length) {
      autocompleteItem.tags = tags;
    }
    return autocompleteItem;
  });
}

export function* getSingleChildren<Item extends BasicItem<Item>>(
  children: Item[]
): Generator<string, void, never> {
  if (children.length === 1) {
    yield children[0].id;
  }
  for (const child of children) {
    if (child.items) {
      yield* getSingleChildren(child.items);
    }
  }
}

export function formatLargeNumber(x: string | number) {
  const string = x.toString();

  // If number is converted to scientific notation return as is
  // because commas can't be added as the coefficient will be < 10
  if (string.includes('e')) {
    return string;
  }
  const [integer, decimal] = x.toString().split('.');
  const integerWithCommas = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return [integerWithCommas, decimal]
    .filter((el) => typeof el !== 'undefined')
    .join('.');
}

export function formatBytesNumber(bytes: string | number, decimals = 0) {
  const bytesNumber = +bytes;
  if (!bytesNumber) {
    return '0 Bytes';
  }
  const positiveDecimals = decimals < 0 ? 0 : decimals;
  const baseFactor = 1024;
  const prefixes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const prefixesIndex = Math.min(
    Math.floor(Math.log(bytesNumber) / Math.log(baseFactor)),
    prefixes.length - 1
  );
  const number = (bytesNumber / baseFactor ** prefixesIndex).toFixed(
    positiveDecimals
  );
  const prefix = prefixes[prefixesIndex];
  return `${formatLargeNumber(parseFloat(number))} ${prefix}`;
}

const reProtocol = /^(https?:)?(\/\/)?/;
const reTrailingSlashes = /(\/+$)/;

export const tidyUrlString = (url: string) =>
  url.replace(reProtocol, '').replace(reTrailingSlashes, '');
