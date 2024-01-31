import cn from 'classnames';
import {
  Facets as FacetsComponent,
  Facet,
  formatLargeNumber,
} from '../src/components';

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

const active = new Set(['facet_2_value_2']);
const facetDataWithReactValues = facetData.map((fd) => ({
  ...fd,
  values: fd.values?.map(({ label, value, count }) => (
    <a
      href={`${window.parent.location.href}#`}
      key={`${fd.name}_${value}`}
      className={cn({ active: active.has(`${fd.name}_${value}`) })}
    >
      {label || value}
      {` (${formatLargeNumber(count)})`}
    </a>
  )),
}));

export const Facets = () => {
  const propFacetData = facetDataWithReactValues.slice(0, 2);
  const childFacetData = facetDataWithReactValues.slice(2);

  return (
    <div style={{ border: '1px solid black', padding: '1ch' }}>
      <FacetsComponent data={propFacetData}>
        injected content
        {childFacetData.map((facet) => (
          <Facet data={facet} key={facet.name} />
        ))}
      </FacetsComponent>
    </div>
  );
};
