import { render, screen } from '@testing-library/react';

import { Facet, Facets } from '../facets';

import facets, { statusFacet, proteinsWithFacet } from '../__mocks__/facets';

describe('<Facet />', () => {
  it('should render facet with few data', () => {
    const { asFragment } = render(<Facet data={statusFacet} />);
    expect(
      screen.queryByRole('button', { name: /More items/i })
    ).not.toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render facet with a lot of data', () => {
    const { asFragment } = render(<Facet data={proteinsWithFacet} />);
    expect(
      screen.getByRole('button', { name: /More items/i })
    ).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('<Facets />', () => {
  it('should render multiple facets', () => {
    const { asFragment } = render(<Facets data={facets} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('<Facet />', () => {
  it('should render facet with few data', () => {
    const { asFragment } = render(<Facet data={statusFacet} />);
    expect(
      screen.queryByRole('button', { name: /More items/i })
    ).not.toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render facet with a lot of data', () => {
    const { asFragment } = render(<Facet data={proteinsWithFacet} />);
    expect(
      screen.getByRole('button', { name: /More items/i })
    ).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
