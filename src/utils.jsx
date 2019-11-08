import React, { Fragment } from 'react';

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
    } else if (!id || thisNode.id === id) {
      flattened = [...flattened, nodePath];
    }
  });
  return flattened;
};

export function restructureFlattenedTreeItemsForAutocomplete(items, sep = ' / ') {
  return {
    id: items[items.length - 1].id,
    pathLabel: items.map(item => item.label).join(sep),
    itemLabel: items[items.length - 1].label,
  };
}

export function restructureFlattenedTreeDataForAutocomplete(flattenedTreeData) {
  return flattenedTreeData.map(items => restructureFlattenedTreeItemsForAutocomplete(items));
}

export function formatLargeNumber(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function serializableDeepAreEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

export const fillArray = (numberElements, func) =>
  Array(numberElements)
    .fill(null)
    .map((currentValue, index) => func(currentValue, index));

export function capitaliseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function highlightSubstring(string, substring) {
  const i = getLastIndexOfSubstringIgnoreCase(string, substring);
  if (i < 0) return string;
  const prestring = string.slice(0, i);
  const highlight = string.slice(i, i + substring.length);
  const poststring = string.slice(i + substring.length);
  return (
    <Fragment>
      {prestring}
      <b>{highlight}</b>
      {poststring}
    </Fragment>
  );
}

export function getClassNames(mixedInput, optionalCondition, output = '') {
  if (typeof optionalCondition !== 'undefined' && optionalCondition !== true) {
    return '';
  }

  if (typeof mixedInput === 'string') {
    return mixedInput;
  }

  if (Array.isArray(mixedInput)) {
    if (typeof mixedInput[1] !== 'undefined' && typeof mixedInput[1] === 'boolean') {
      return getClassNames(mixedInput[0], mixedInput[1], output);
    }

    return mixedInput
      .map((item) => {
        if (Array.isArray(item)) {
          return getClassNames(item, optionalCondition, output);
        }

        return getClassNames(item, optionalCondition, output);
      })
      .filter(x => x) // removes nulls, undefineds, empty strings, etc.
      .join(' ');
  }

  return output;
}
