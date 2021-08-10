import { screen, render, fireEvent } from '@testing-library/react';

import Chip from '../chip';

describe('Chip component', () => {
  it('should render', () => {
    const { asFragment } = render(<Chip>Some content</Chip>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should fire onRemove when remove SVG is clicked', () => {
    const onRemove = jest.fn();
    render(<Chip onRemove={onRemove}>Some content</Chip>);
    const removeIcon = screen.getByTestId('remove-icon');
    fireEvent.click(removeIcon);
    expect(onRemove).toHaveBeenCalled();
  });

  it('should not show remove icon when onRemove prop is not passed', () => {
    render(<Chip>Some content</Chip>);
    const removeIcon = screen.queryByTestId('remove-icon');
    expect(removeIcon).toBeNull();
  });

  it('should not have disabled attribute when disabled=false passed as a prop', () => {
    render(<Chip disabled={false}>Some content</Chip>);
    expect(screen.getByRole('button')).not.toHaveClass('chip--disabled');
  });

  it('should have disabled attribute when disabled=true passed as a prop', () => {
    render(<Chip disabled>Some content</Chip>);
    expect(screen.getByRole('button')).toHaveClass('chip--disabled');
  });
});
