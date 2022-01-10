import { screen, render, fireEvent } from '@testing-library/react';

import Accordion from '../accordion';

const props = {
  title: 'foo',
  count: 10,
  children: <div>Foo bar baz qux quux quuz</div>,
};

describe('Accordion', () => {
  it('should render', () => {
    const { asFragment } = render(<Accordion {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should show content when expand title is clicked', () => {
    render(<Accordion {...props} />);
    const title = screen.getByTestId('accordion-title');
    fireEvent.click(title);
    const content = screen.getByTestId('accordion-content');
    expect(content).toHaveClass(
      'accordion__content',
      'accordion__content--display-content'
    );
  });

  it('should not show content when expand title is clicked twice', () => {
    render(<Accordion {...props} />);
    const title = screen.getByTestId('accordion-title');
    fireEvent.click(title);
    fireEvent.click(title);
    const content = screen.getByTestId('accordion-content');
    expect(content).toHaveClass(
      'accordion__content',
      'accordion__content--hide-content'
    );
  });
});
