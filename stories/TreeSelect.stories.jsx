import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, radios, text } from '@storybook/addon-knobs';

import { TreeSelect } from '../src/components';

import { treeData } from '../src/mock-data/tree-data';

export default {
  title: 'Forms/Tree Select',
  decorators: [withKnobs()],
  parameters: {
    purposeFunction: {
      purpose: 'Allow selection of item(s) from nested data set',
      function: 'Navigate through a tree to make a selection',
    },
  },
};

const useLabel = () => text('label', 'Select', 'Props');

const useVariant = () =>
  radios('variant', ['primary', 'secondary', 'tertiary'], 'primary', 'Props');

export const treeSelect = () => (
  <TreeSelect
    label={useLabel()}
    data={treeData}
    onSelect={action('onSelect')}
    variant={useVariant()}
  />
);

export const treeSelectWithAutocomplete = () => (
  <TreeSelect
    label={useLabel()}
    data={treeData}
    onSelect={action('onSelect')}
    autocomplete
    autocompletePlaceholder="Search for item"
    autocompleteFilter
    variant={useVariant()}
  />
);
