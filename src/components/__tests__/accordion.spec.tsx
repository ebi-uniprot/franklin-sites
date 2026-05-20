import { screen, render, fireEvent } from '@testing-library/react';

import Accordion from '../accordion';

const accordionContent = 'Foo bar baz qux quux quuz';

const props = {
  accordionTitle: 'foo',
  count: 10,
};

const accordionChildren = <div>{accordionContent}</div>;

describe('Accordion', () => {
  it('should render', () => {
    const { asFragment } = render(
      <Accordion {...props}>{accordionChildren}</Accordion>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should show content according to accordion state', () => {
    render(<Accordion {...props}>{accordionChildren}</Accordion>);
    const title = screen.getByRole('button', { name: /foo/ });
    expect(screen.queryByText(accordionContent)).not.toBeInTheDocument();
    fireEvent.click(title);
    expect(screen.getByText(accordionContent)).toBeInTheDocument();
    fireEvent.click(title);
    expect(screen.queryByText(accordionContent)).not.toBeInTheDocument();
  });
});
