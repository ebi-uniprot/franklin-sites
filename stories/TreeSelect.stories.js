import React from 'react';
import { action } from '@storybook/addon-actions';
import { TreeSelect } from '../src/components';
import { treeData } from '../src/mock-data/tree-data';

export default {
  title: 'Data view/Tree Select',
  parameters: {
    purposeFunction: {
      purpose: 'Allow selection of item(s) from nested data set',
      function: 'Navigate through a tree to make a selection',
    },
  },
};

export const treeSelect = () => (
  <TreeSelect
    data={treeData}
    onSelect={action('onSelect')}
    autocompletePlaceholder="Search for item"
    autocompleteFilter
  />
);

export const treeSelectWithAutocomplete = () => (
  <TreeSelect
    data={treeData}
    onSelect={action('onSelect')}
    autocomplete
    autocompletePlaceholder="Search for item"
    autocompleteFilter
  />
);
