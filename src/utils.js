export function getLastIndexOfSubstringIgnoreCase(string, substring) {
  return string.toLowerCase().lastIndexOf(substring.toLowerCase());
}

export const getFlattenedPaths = (currentItems, id, path = []) => {
  let flattened = [];
  currentItems.forEach((node) => {
    const { items, ...thisNode } = node;
    const nodePath = [...path, thisNode];
    if (items) {
      const result = getFlattenedPaths(items, id, nodePath);
      if (result.length) {
        flattened = [...flattened, ...result];
      }
    } else if (!id || thisNode.label === id) {
      flattened = [...flattened, nodePath];
    }
  });
  return flattened;
};

function getSquashedPath(path, sep = ' / ') {
  const label = path.map(item => item.label).join(sep);
  const termPath = path.map(item => item.term);
  return {
    label,
    termPath,
  };
}

export function getSquashedArrayOfPaths(paths) {
  return paths.map(path => getSquashedPath(path));
}
