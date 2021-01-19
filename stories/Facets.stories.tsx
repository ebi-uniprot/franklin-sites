import { MemoryRouter, useLocation } from 'react-router-dom';

import { Facets } from '../src/components';

import facetData from '../src/mock-data/facetData';

export default {
  title: 'Data/Facets',
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
  const location = useLocation();

  const extraActionsFor = new Map([
    [
      'long_facet',
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a className="button tertiary expandable-list__action">
        Link to somewhere
      </a>,
    ],
  ]);

  return (
    <>
      <code style={{ margin: '0 1ch' }}>
        pathname: {location.pathname + location.search}
      </code>
      <div style={{ border: '1px solid black', padding: '1ch' }}>
        <Facets data={facetData} extraActionsFor={extraActionsFor} />
      </div>
    </>
  );
};

export const facets = () => (
  <MemoryRouter
    initialEntries={[
      '/initial/path/id1?facets=facet_2%3Avalue_2&other_field&yet_another=value',
    ]}
  >
    <Demo />
  </MemoryRouter>
);
