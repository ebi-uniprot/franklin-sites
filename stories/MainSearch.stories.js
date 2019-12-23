import React from 'react';
import PropTypes from 'prop-types';
import { action } from '@storybook/addon-actions';
import MainSearch from '../src/components/main-search';
import StateDecorator from '../src/decorators/StateDecorator';

// Custom decorator
export default {
  title: 'Forms/Main Search',
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

export const mainSearch = ({ state, setState }) => {
  return (
    <MainSearch
      searchTerm={state.value}
      onChange={value => setState({ value })}
      onSubmit={action('Submitted')}
    />
  );
};

mainSearch.propTypes = {
  state: PropTypes.shapeOf({}).isRequired,
  setState: PropTypes.func.isRequired,
};
