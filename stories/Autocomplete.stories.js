import React from 'react';
import { action } from '@storybook/addon-actions';
import { Autocomplete } from '../src/components';
import { flattenedPaths } from '../src/app/common/tree-data';

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
    onSelect={action()}
    placeholder="Item A"
    filter
  />
);
