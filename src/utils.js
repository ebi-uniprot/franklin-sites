export function getLastIndexOfSubstringIgnoreCase(string, substring) {
  return string.toLowerCase().lastIndexOf(substring.toLowerCase());
}

export const getFlattenedPaths = (currentItems, value, path = []) => {
  let flattened = [];
  currentItems.forEach((node) => {
    const { items, ...thisNode } = node;
    const nodePath = [...path, thisNode];
    if (items) {
      const result = getFlattenedPaths(items, value, nodePath);
      if (result.length) {
        flattened = [...flattened, ...result];
      }
    } else if (!value || thisNode.value === value) {
      flattened = [...flattened, nodePath];
    }
  });
  return flattened;
};

export function restructureFlattenedTreeItemsForAutocomplete(items, sep = ' / ') {
  return {
    value: items[items.length - 1].value,
    pathLabel: items.map(item => item.label).join(sep),
    itemLabel: items[items.length - 1].label,
  };
}

export function restructureFlattenedTreeDataForAutocomplete(flattenedTreeData) {
  return flattenedTreeData.map(items => restructureFlattenedTreeItemsForAutocomplete(items));
}
