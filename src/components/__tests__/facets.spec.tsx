import { screen } from '@testing-library/react';

import { Facet, Facets, stringify, parse } from '../facets';

import renderWithRouter from '../../testHelpers/renderWithRouter';

import facets, { statusFacet, proteinsWithFacet } from '../__mocks__/facets';

describe('<Facet />', () => {
  it('should render facet with few data', () => {
    const { asFragment } = renderWithRouter(<Facet data={statusFacet} />);
    expect(
      screen.queryByRole('button', { name: /More items/i })
    ).not.toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render facet with a lot of data', () => {
    const { asFragment } = renderWithRouter(<Facet data={proteinsWithFacet} />);
    expect(
      screen.getByRole('button', { name: /More items/i })
    ).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('<Facets />', () => {
  it('should render multiple facets', () => {
    const { asFragment } = renderWithRouter(<Facets data={facets} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('parse facets and stringify', () => {
  it('should handle just facets', () => {
    const oneFacet = 'facets=identity%3A1.0';
    const twoFacets = 'facets=identity%3A1.0%2Cblabla%3Avalue';
    expect(stringify(parse(oneFacet))).toBe(oneFacet);
    expect(stringify(parse(twoFacets))).toBe(twoFacets);
  });

  it('should handle facets and something else', () => {
    const query = 'query=glucose&facets=identity%3A1.0';
    expect(stringify(parse(query))).toBe(query);
  });

  it('should handle facets with another name', () => {
    const key = 'filter';
    const query = 'query=glucose&filter=identity%3A1.0';
    expect(stringify(parse(query, key), key)).toBe(query);
  });
});
