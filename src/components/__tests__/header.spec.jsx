import React from 'react';

import Header from '../header';
import renderWithRouter from '../../testHelpers/renderWithRouter';
import expectToThrowNoConsole from '../../testHelpers/expectToThrowNoConsole';

describe('Header component', () => {
  test('should render', () => {
    const { asFragment } = renderWithRouter(
      <Header links={[{ path: '/there', label: 'there' }]} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  // eslint-disable-next-line jest/expect-expect
  test('should throw error', () => {
    expectToThrowNoConsole(() => {
      renderWithRouter(
        <Header links={[{ path: '/there', href: '/here', label: 'there' }]} />
      );
    });
  });
});
