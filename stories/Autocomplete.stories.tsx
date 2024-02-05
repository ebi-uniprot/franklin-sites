import { action } from '@storybook/addon-actions';
import { Autocomplete as A } from '../src/components';
import { flattenedPaths } from '../src/mock-data/tree-data';

export default {
  title: 'Forms/Autocomplete',
  parameters: {
    purposeFunction: {
      function: 'Search through an array to make a selection',
      purpose: 'Allow selection of item from flat data set',
    },
  },
};

export const AutocompleteComponent = () => (
  <A
    data={flattenedPaths}
    onSelect={action('onSelect')}
    placeholder="Item A"
    filter
  />
);

export const LoadingAutocomplete = () => (
  <A
    data={flattenedPaths}
    onSelect={action('onSelect')}
    placeholder="Item A"
    filter
    isLoading
  />
);
