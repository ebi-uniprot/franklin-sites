import { render, screen } from '@testing-library/react';
import { SubstringHighlight } from '..';

// TODO: Can't get mark by role yet but it should be possible in the future:
// https://github.com/testing-library/dom-testing-library/issues/1150

describe('SubstringHighlight', () => {
  const string = 'Item 1 / Item 1a';
  it('should highlight substring (case insensitive)', () => {
    const { container } = render(
      <SubstringHighlight substring="item 1">{string}</SubstringHighlight>
    );
    expect(screen.queryByText(string)).not.toBeInTheDocument();
    const highlight = container.querySelector('mark');
    expect(highlight).toHaveTextContent('Item 1');
  });
  it('should render string without highlight if no substring found', () => {
    const { container } = render(
      <SubstringHighlight substring="zap">{string}</SubstringHighlight>
    );
    const highlight = container.querySelector('mark');
    expect(highlight).toBeNull();
  });
});
