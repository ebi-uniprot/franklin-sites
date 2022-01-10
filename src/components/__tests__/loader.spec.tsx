import { render, screen } from '@testing-library/react';

import Loader from '../loader';

describe('ExternalLink component', () => {
  it('should render a loader component', () => {
    expect(() => render(<Loader />)).not.toThrow();
  });

  it('should render a loader component with a progress bar', () => {
    render(<Loader progress={0.5} />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
});
