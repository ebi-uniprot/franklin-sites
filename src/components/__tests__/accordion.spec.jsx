import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Accordion from '../accordion';

const props = {
  title: 'foo',
  count: 10,
  children: <div>Foo bar baz qux quux quuz</div>,
};

describe('Accordion', () => {
  test('should render', () => {
    const { asFragment } = render(<Accordion {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should show content when expand title is clicked', () => {
    const { queryByTestId } = render(<Accordion {...props} />);
    const title = queryByTestId('accordion-title');
    fireEvent.click(title);
    const content = queryByTestId('accordion-content');
    const contentClasses = Object.values(content.classList);
    expect(contentClasses).toEqual([
      'accordion__content',
      'accordion__content--display-content',
    ]);
  });

  test('should not show content when expand title is clicked twice', () => {
    const { queryByTestId } = render(<Accordion {...props} />);
    const title = queryByTestId('accordion-title');
    fireEvent.click(title);
    fireEvent.click(title);
    const content = queryByTestId('accordion-content');
    const contentClasses = Object.values(content.classList);
    expect(contentClasses).toEqual([
      'accordion__content',
      'accordion__content--hide-content',
    ]);
  });
});
