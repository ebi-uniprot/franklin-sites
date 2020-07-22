import React from 'react';
import { action } from '@storybook/addon-actions';
import { MemoryRouter, useHistory, useLocation } from 'react-router-dom';

import { Facets } from '../src/components';
import facetData from '../src/mock-data/facetData';

export default {
  title: 'Data|Facets',
  parameters: {
    purposeFunction: {
      purpose:
        'Give meta-information about a result set (e.g. keywords, top organisms, …) and allow restriction of a results set.',
      function:
        'Modify a query to filter a set of results, highlight filter which is currently selected, remove selected filter.',
    },
  },
};

const Demo = () => {
  const history = useHistory();
  const location = useLocation();

  return (
    <>
      <button
        disabled={history.index === 0}
        type="button"
        className="button"
        onClick={history.goBack}
      >
        Browser back
      </button>{' '}
      <button
        disabled={history.index + 1 === history.length}
        type="button"
        className="button"
        onClick={history.goForward}
      >
        Browser forward
      </button>
      <br />
      <code style={{ margin: '0 1ch' }}>
        pathname:
        {location.pathname + location.search}
      </code>
      <div style={{ border: '1px solid black', padding: '1ch' }}>
        <Facets data={facetData} />
      </div>
    </>
  );
};

export const facets = () => (
  <MemoryRouter
    initialEntries={[
      '/initial/path/id1?facets=facet_2:value_2&other_field&yet_another=value',
    ]}
  >
    <Demo />
  </MemoryRouter>
);
