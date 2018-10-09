const getFlattenedPaths = (currentItems, id, path = []) => {
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

export default getFlattenedPaths;
