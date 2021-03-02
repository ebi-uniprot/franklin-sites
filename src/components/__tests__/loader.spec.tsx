import { render, screen } from '@testing-library/react';

import Loader from '../loader';

describe('ExternalLink component', () => {
  test('should render a loader component', () => {
    expect(() => render(<Loader />)).not.toThrow();
  });

  test('should render a loader component with a progress bar', () => {
    render(<Loader progress={0.5} />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
});
