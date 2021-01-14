import React from 'react';
import { render } from '@testing-library/react';

import Bubble from '../bubble';

describe('Long number component', () => {
  test('should render with defaults', () => {
    const { asFragment } = render(<Bubble value={10} />);
    expect(asFragment()).toMatchSnapshot();
  });
  test('should render bigger than 100', () => {
    const { asFragment } = render(<Bubble value={101} />);
    expect(asFragment()).toMatchSnapshot();
  });
  test('should render different size and colour', () => {
    const { asFragment } = render(
      <Bubble value={101} colourClass="colour-light-grey" size="large" />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
