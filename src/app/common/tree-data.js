export const treeData = [{
  label: 'Item 1',
  term: 'item_1',
  items: [{
    label: 'Item 1 a',
    term: 'item_1_a',
  }, {
    label: 'Item 1 b',
    term: 'item_1_b',
    items: [{
      label: 'Item 1 b A',
      term: 'item_1_b_A',
    }, {
      label: 'Item 1 b B',
      term: 'item_1_b_B',
    }]
  }]
}, {
  label: 'Some Item 2',
  term: 'item_2',
}];

function getPathLabel(path, sep = ' / ') {
  return path.map(item => item.label).join(sep);
}

function flattenTreeData(treeData, path = []) {
  let flattened = [];
  for (const node of treeData) {
    let nodePath = [...path, node]
    flattened = [...flattened, {
      'label': getPathLabel(nodePath),
      'value': nodePath
    }];
    if (node.items) {
      const moreFlattened = flattenTreeData(node.items, nodePath);
      if (moreFlattened.length) {
        flattened = [...flattened, ...moreFlattened];
      }
    }
  }
  return flattened;
}

function generateRandomFlatData(arrayLength) {
  let array = [];
  console.log(arrayLength);
  
  for (let i = 0; i<=arrayLength; i++) {
    console.log(i);
    let label = Math.random().toString(36);
    let value = Math.random().toString(36);
    console.log(label);
    console.log(value);
    array.push({label, value});
  }
  console.log(array);
  return array;
}

export const generatedRandomFlatData = generateRandomFlatData(100);
export const flatTreeData = flattenTreeData(treeData);
