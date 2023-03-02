import { render, screen } from '@testing-library/react';
import { SubstringHighlight } from '..';

describe('SubstringHighlight', () => {
  const string = 'Item 1 / Item 1a';
  it('should highlight substring (case insensitive)', () => {
    render(<SubstringHighlight string={string} substring="item 1" />);
    expect(screen.queryByText(string)).not.toBeInTheDocument();
    expect(screen.getByText('Item 1')).toHaveClass('highlight');
  });
  it('should render string without highlight if no substring found', () => {
    render(<SubstringHighlight string={string} substring="zap" />);
    expect(screen.getByText(string)).not.toHaveClass('highlight');
  });
});
