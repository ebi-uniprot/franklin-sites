import { fireEvent, render, screen } from '@testing-library/react';
import EllipsisReveal from '../ellipsis-reveal';

describe('EllipsisReveal', () => {
  test('should reveal extra text upon click', () => {
    render(<EllipsisReveal>Some other text</EllipsisReveal>);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    const expandedText = screen.findByText('Some other text');
    expect(expandedText).toBeTruthy();
  });
});
