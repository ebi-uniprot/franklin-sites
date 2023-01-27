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
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function highlightSubstring(string: string, substring: string) {
  if (!string || !substring) {
    return string;
  }
  const i = getLastIndexOfSubstringIgnoreCase(string, substring);
  if (i < 0) return string;
  const prestring = string.slice(0, i);
  const highlight = string.slice(i, i + substring.length);
  const poststring = string.slice(i + substring.length);
  return (
    <>
      {prestring}
      <b>{highlight}</b>
      {poststring}
    </>
  );
}

const reProtocol = /^(https?:)?(\/\/)?/;
const reTrailingSlashes = /(\/+$)/;

export const tidyUrlString = (url: string) =>
  url.replace(reProtocol, '').replace(reTrailingSlashes, '');
