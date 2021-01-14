import { render, screen } from '@testing-library/react';

import CodeBlock from '../code-block';

describe('DoughnutChart component', () => {
  test('should render in dark mode', () => {
    const { asFragment } = render(<CodeBlock>Some code</CodeBlock>);
    // TODO: this should be a visual snapshot eventually
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render in light mode', () => {
    const { asFragment } = render(<CodeBlock lightMode>Some code</CodeBlock>);
    // TODO: this should be a visual snapshot eventually
    expect(asFragment()).toMatchSnapshot();
  });
});
