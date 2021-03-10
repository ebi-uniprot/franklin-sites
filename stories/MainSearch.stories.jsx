import PropTypes from 'prop-types';
import { action } from '@storybook/addon-actions';

import { MainSearch } from '../src/components';
import StateDecorator from '../src/decorators/StateDecorator';

const namespaces = {
  uniprotkb: 'UniProtKB',
  uniref: 'UniRef',
  uniparc: 'UniParc',
  proteomes: 'Proteomes',
  publications: 'Publications',
  keywords: 'Keywords',
};

// Custom decorator
export default {
  title: 'Forms/Main Search',
  decorators: [
    (story) => (
      <StateDecorator>
        {(state, setState) => (
          <div style={{ display: 'flex', flexFlow: 'column' }}>
            {story({ state, setState })}
          </div>
        )}
      </StateDecorator>
    ),
  ],
  parameters: {
    purposeFunction: {
      purpose: 'Allow selection of item from flat data set',
      function: 'Search through an array to make a selection',
    },
  },
};

export const mainSearch = (_, { state, setState }) => (
  <MainSearch
    searchTerm={state.value}
    onChange={(value) => setState({ value })}
    onSubmit={action('Submitted')}
  />
);

mainSearch.propTypes = {
  state: PropTypes.shape({
    value: PropTypes.string,
    namespace: PropTypes.string,
  }).isRequired,
  setState: PropTypes.func.isRequired,
};

export const mainSearchWithNamespaces = (
  { defaultNamespace },
  { state, setState }
) => (
  <MainSearch
    selectedNamespace={state.namespace || defaultNamespace}
    searchTerm={state.value}
    namespaces={namespaces}
    onNamespaceChange={(value) => setState({ namespace: value })}
    onChange={(value) => setState({ value })}
    onSubmit={action('Submitted')}
  />
);
// eslint-disable-next-line prefer-destructuring
mainSearchWithNamespaces.args = { defaultNamespace: 'uniprotkb' };
