import React from 'react';
import { SearchInput } from '../src/components';

export default {
  title: 'Forms|Search Input',
  parameters: {
    purposeFunction: {
      function:
        'Filter data displayed on the screen (autocomplete, list of fields etc.)',
      purpose:
        'Provide the user with an indication that typing in the input box will search something',
    },
  },
};

export const searchInput = () => <SearchInput placeholder="Search" />;
