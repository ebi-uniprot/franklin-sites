import { render } from '@testing-library/react';

import Bubble from '../bubble';

describe('Long number component', () => {
  test('should render with defaults', () => {
    const { asFragment } = render(<Bubble>{10}</Bubble>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render bigger than 100', () => {
    const { asFragment } = render(<Bubble>{101}</Bubble>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render different size', () => {
    const { asFragment } = render(<Bubble size="large">{101}</Bubble>);
    expect(asFragment()).toMatchSnapshot();
  });
});
