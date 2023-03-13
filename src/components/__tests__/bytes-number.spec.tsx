import { render } from '@testing-library/react';

import BytesNumber from '../bytes-number';

describe('Bytes number component', () => {
  it('should render', () => {
    const { asFragment } = render(
      <BytesNumber decimals={1}>{2621388791}</BytesNumber>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
