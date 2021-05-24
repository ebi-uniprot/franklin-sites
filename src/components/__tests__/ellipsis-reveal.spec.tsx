import { fireEvent, render, screen } from '@testing-library/react';
import EllipsisReveal from '../ellipsis-reveal';

describe('EllipsisReveal', () => {
  test('should reveal extra text upon click', () => {
    render(<EllipsisReveal>Some other text</EllipsisReveal>);

    expect(screen.queryByText('Some other text')).not.toBeInTheDocument();

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(screen.getByText('Some other text')).toBeInTheDocument();
  });
});
