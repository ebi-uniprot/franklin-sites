export function getLastIndexOfSubstringIgnoreCase(
  string: string,
  substring: string
) {
  return string.toLowerCase().lastIndexOf(substring.toLowerCase());
}

type Item = {
  label: string;
  id: string;
  items?: Item[];
};
export const getFlattenedPaths = (
  currentItems: Item[],
  id?: string,
  path: Item[] = []
) => {
  let flattened: Pick<Item, 'label' | 'id'>[][] = [];
  currentItems.forEach((node) => {
    const { items, ...thisNode } = node;
    const nodePath = [...path, thisNode];
    if (items) {
      const result = getFlattenedPaths(items, id, nodePath);
      if (result.length) {
        flattened = [...flattened, ...result];
      }
    } else if (!id || thisNode.id === id) {
      flattened = [...flattened, nodePath];
    }
  });
  return flattened;
};

export function restructureFlattenedTreeItemsForAutocomplete(
  items: Item[],
  sep = ' / '
) {
  return {
    id: items[items.length - 1].id,
    pathLabel: items.map((item) => item.label).join(sep),
    itemLabel: items[items.length - 1].label,
  };
}

export function restructureFlattenedTreeDataForAutocomplete(
  flattenedTreeData: Item[][]
) {
  return flattenedTreeData.map((items) =>
    restructureFlattenedTreeItemsForAutocomplete(items)
  );
}

export function formatLargeNumber(x: string | number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function capitaliseFirstLetter(string?: string | null) {
  return string && string.charAt(0).toUpperCase() + string.slice(1);
}

export function highlightSubstring(string: string, substring: string) {
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

const reProtocol = /^((https?:\/\/)?((\/\/)?www\.)?)/;
const reTrailingSlashes = /(\/+$)/;

export const tidyUrlString = (url: string) =>
  url.replace(reProtocol, '').replace(reTrailingSlashes, '');
