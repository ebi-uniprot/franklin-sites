import { stringify, parse } from '../facets';

describe('parse facets and stringify', () => {
  it('should handle just facets', () => {
    const oneFacet = 'facets=identity%3A1.0';
    const twoFacets = 'facets=identity%3A1.0%2Cblabla%3Avalue';
    expect(stringify(parse(oneFacet))).toBe(oneFacet);
    expect(stringify(parse(twoFacets))).toBe(twoFacets);
  });

  it('shoudl handle facets and something else', () => {
    const query = 'facets=identity%3A1.0&query=glucose';
    expect(stringify(parse(query))).toBe(query);
  });

  it('should handle facets with another name', () => {
    const key = 'filter';
    const query = 'filter=identity%3A1.0&query=glucose';
    expect(stringify(parse(query, key), key)).toBe(query);
  });
});
