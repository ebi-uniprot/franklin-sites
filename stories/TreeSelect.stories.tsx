import { action } from '@storybook/addon-actions';
import { withKnobs, select, text } from '@storybook/addon-knobs';

import { TreeSelect as TS } from '../src/components';

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

const variants = ['primary', 'secondary', 'tertiary'] as const;

const useVariant = () => select('variant', variants, 'primary', 'Props');

export const TreeSelect = () => (
  <TS
    label={useLabel()}
    data={treeData}
    onSelect={action('onSelect')}
    variant={useVariant()}
  />
);

export const TreeSelectWithAutocomplete = () => (
  <TS
    label={useLabel()}
    data={treeData}
    onSelect={action('onSelect')}
    autocomplete
    autocompletePlaceholder="Search for item"
    autocompleteFilter
    variant={useVariant()}
  />
);
