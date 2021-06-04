import { action } from '@storybook/addon-actions';
import { Autocomplete } from '../src/components';
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

export const autocomplete = () => (
  <Autocomplete
    data={flattenedPaths}
    onSelect={action('onSelect')}
    placeholder="Item A"
    filter
  />
);

export const loadingAutocomplete = () => (
  <Autocomplete
    data={flattenedPaths}
    onSelect={action('onSelect')}
    placeholder="Item A"
    filter
    isLoading
  />
);
