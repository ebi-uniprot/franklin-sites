import { render } from '@testing-library/react';

import ExternalLink from '../external-link';

describe('ExternalLink component', () => {
  test('should render external link', () => {
    const { asFragment } = render(
      <ExternalLink url="#">
        <span>Link text</span>
      </ExternalLink>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render external link without target: _blank attribute', () => {
    const { asFragment } = render(
      <ExternalLink url="#" newTab={false}>
        <span>Link text</span>
      </ExternalLink>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
