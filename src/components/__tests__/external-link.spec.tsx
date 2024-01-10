import { render, screen } from '@testing-library/react';

import ExternalLink from '../external-link';

describe('ExternalLink component', () => {
  it('should render external link with icon', () => {
    const { asFragment } = render(
      <ExternalLink url="#">
        <span>Link text</span>
      </ExternalLink>
    );
    expect(asFragment()).toMatchSnapshot();
    expect(screen.queryByTestId('external-link-icon')).toBeInTheDocument();
  });

  it('should render external link without target: _blank attribute', () => {
    const { asFragment } = render(
      <ExternalLink url="#" newTab={false}>
        <span>Link text</span>
      </ExternalLink>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render just the url without http(s), www, /$ if no child text is passed', () => {
    const { asFragment } = render(
      <ExternalLink url="https://www.ebi.ac.uk/" tidyUrl />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should not include icon if noIcon is passed', () => {
    render(<ExternalLink url="https://www.ebi.ac.uk/" noIcon />);
    expect(screen.queryByTestId('external-link-icon')).not.toBeInTheDocument();
  });

  it('should not render anchor tag if no url', () => {
    render(<ExternalLink url={null}>foo</ExternalLink>);
    const el = screen.queryByText('foo');
    expect(el).toBeInTheDocument();
    expect(el?.tagName.toLowerCase()).not.toBe('a');
  });
});
