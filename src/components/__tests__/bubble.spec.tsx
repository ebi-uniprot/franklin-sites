import { render } from '@testing-library/react';

import Bubble from '../bubble';

describe('Long number component', () => {
  it('should render with defaults', () => {
    const { asFragment } = render(<Bubble>{10}</Bubble>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render without children', () => {
    const { asFragment } = render(<Bubble />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render bigger than 100', () => {
    const { asFragment } = render(<Bubble>{101}</Bubble>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render different size', () => {
    const { asFragment } = render(<Bubble size="large">{101}</Bubble>);
    expect(asFragment()).toMatchSnapshot();
  });
});
