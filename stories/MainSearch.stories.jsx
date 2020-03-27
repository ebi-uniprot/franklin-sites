import React from 'react';
import PropTypes from 'prop-types';
import { action } from '@storybook/addon-actions';
import { MainSearch } from '../src/components';
import StateDecorator from '../src/decorators/StateDecorator';

const namespaces = [
  'UniProtKB - the UniProt knowledgebase',
  'UniRef',
  'UniParc',
  'Proteomes',
  'Publications',
  'Keywords'
];

// Custom decorator
export default {
  title: 'Forms|Main Search',
  decorators: [
    story => {
      return (
        <StateDecorator>
          {(state, setState) => (
            <div style={{ display: 'flex', flexFlow: 'column' }}>
              {story({ state, setState })}
            </div>
          )}
        </StateDecorator>
      );
    },
  ],
  parameters: {
    purposeFunction: {
      purpose: 'Allow selection of item from flat data set',
      function: 'Search through an array to make a selection',
    },
  },
};

export const mainSearch = ({ state, setState }) => (
  <MainSearch
    searchTerm={state.value}
    onChange={value => setState({ value })}
    onSubmit={action('Submitted')}
  />
);

export const mainSearchWithNamespaces = ({ state, setState }) => (
  <MainSearch
    searchTerm={state.value}
    namespaces={namespaces}
    onChange={value => setState({ value })}
    onSubmit={action('Submitted')}
  />
);

mainSearch.propTypes = {
  state: PropTypes.shape({ value: PropTypes.string }).isRequired,
  setState: PropTypes.func.isRequired,
};