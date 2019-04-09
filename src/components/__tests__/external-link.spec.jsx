import React from 'react';
import renderer from 'react-test-renderer';

import ExternalLink from '../external-link';

describe('ExternalLink component', () => {
  test('should render external link', () => {
    const component = renderer
      .create(
        <ExternalLink url="#">
          <span>Link text</span>
        </ExternalLink>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  test('should render external link without target: _blank attribute', () => {
    const component = renderer
      .create(
        <ExternalLink url="#" newTab={false}>
          <span>Link text</span>
        </ExternalLink>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
