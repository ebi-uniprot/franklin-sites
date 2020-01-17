import React from 'react';
import { action } from '@storybook/addon-actions';
import { Facets } from '../src/components';
import facetData from '../src/mock-data/facetData';

const selectedFacets = [{ name: 'facet_2', value: 'value_2' }];

export default {
  title: 'Navigation/Facets',
  parameters: {
    purposeFunction: {
      purpose:
        'Give meta-information about a result set (e.g. keywords, top organisms, …) and allow restriction of a results set.',
      function:
        'Modify a query to filter a set of results, highlight filter which is currently selected, remove selected filter.',
    },
  },
};

export const facets = () => (
  <Facets
    data={facetData}
    selectedFacets={selectedFacets}
    addFacet={action('addFacet')}
    removeFacet={action('removeFacet')}
  />
);
