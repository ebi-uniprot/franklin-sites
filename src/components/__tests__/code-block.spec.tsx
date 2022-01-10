import { render } from '@testing-library/react';

import CodeBlock from '../code-block';

describe('DoughnutChart component', () => {
  it('should render in dark mode', () => {
    const { asFragment } = render(<CodeBlock>Some code</CodeBlock>);
    // TODO: this should be a visual snapshot eventually
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render in light mode', () => {
    const { asFragment } = render(<CodeBlock lightMode>Some code</CodeBlock>);
    // TODO: this should be a visual snapshot eventually
    expect(asFragment()).toMatchSnapshot();
  });
});
