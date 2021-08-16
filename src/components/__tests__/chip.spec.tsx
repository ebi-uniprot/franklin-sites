import { screen, render, fireEvent } from '@testing-library/react';

import Chip from '../chip';

describe('Chip component', () => {
  it('should render a button when onRemove is not passed', () => {
    const { asFragment } = render(<Chip>Some content</Chip>);
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render span if onRemove is passed; have button role if onClick is also passed; fire onRemove when remove SVG is clicked', () => {
    const onRemove = jest.fn();
    render(
      <Chip onRemove={onRemove} onClick={jest.fn()}>
        Some content
      </Chip>
    );
    expect(screen.getByText('Some content').tagName).toBe('SPAN');
    expect(
      screen.getByRole('button', { name: 'Some content' })
    ).toBeInTheDocument();
    const removeIcon = screen.getByTestId('remove-icon');
    fireEvent.click(removeIcon);
    expect(onRemove).toHaveBeenCalled();
  });

  it('should fire onClick when chip is clicked', () => {
    const onClick = jest.fn();
    render(<Chip onClick={onClick}>Some content</Chip>);
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });

  it('should fire onKeyPress when key pressed', () => {
    const onKeyPress = jest.fn();
    render(<Chip onKeyPress={onKeyPress}>Some content</Chip>);
    const chip = screen.getByRole('button');
    chip.focus();
    fireEvent.keyPress(document.activeElement || document.body, {
      key: 'Enter',
      code: 'Enter',
      charCode: 13,
    });
    expect(onKeyPress).toHaveBeenCalled();
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
