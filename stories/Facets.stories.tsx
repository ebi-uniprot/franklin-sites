import { MemoryRouter, useLocation } from 'react-router-dom';

import { Facets as FacetsComponent, Facet } from '../src/components';

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

const propFacetData = facetData.slice(0, 2);
const childFacetData = facetData.slice(2);

const Demo = () => {
  const location = useLocation();

  return (
    <>
      <code style={{ margin: '0 1ch' }}>
        pathname: {location.pathname + location.search}
      </code>
      <div style={{ border: '1px solid black', padding: '1ch' }}>
        <FacetsComponent data={propFacetData}>
          injected content
          {childFacetData.map((facet) => (
            <Facet data={facet} key={facet.name} />
          ))}
        </FacetsComponent>
      </div>
    </>
  );
};

export const Facets = () => (
  <MemoryRouter
    initialEntries={[
      '/initial/path/id1?facets=facet_2%3Avalue_2&other_field&yet_another=value',
    ]}
  >
    <Demo />
  </MemoryRouter>
);
