import { render } from '@testing-library/react';

import { LongNumber } from '../..';

describe('Long number component', () => {
  it('should render', () => {
    const { asFragment } = render(<LongNumber>{1000000}</LongNumber>);
    expect(asFragment()).toMatchSnapshot();
  });
});
