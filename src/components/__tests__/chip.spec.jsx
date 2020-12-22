import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Chip from '../chip';

describe('Chip component', () => {
  it('should render', () => {
    const { asFragment } = render(<Chip>Some content</Chip>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should fire onRemove when remove SVG is clicked', () => {
    const onRemove = jest.fn();
    const { getByTestId } = render(
      <Chip onRemove={onRemove}>Some content</Chip>
    );
    const removeIcon = getByTestId('remove-icon');
    fireEvent.click(removeIcon);
    expect(onRemove).toHaveBeenCalled();
  });

  it('should not show remove icon when onRemove prop is not passed', () => {
    const { queryByTestId } = render(<Chip>Some content</Chip>);
    const removeIcon = queryByTestId('remove-icon');
    expect(removeIcon).toBeNull();
  });

  it('should not have disabled class when disabled=false passed as a prop', () => {
    const { container } = render(<Chip disabled={false}>Some content</Chip>);
    expect(container.firstChild.className).not.toMatch(/disabled/);
  });

  it('should have disabled class when disabled=true passed as a prop', () => {
    const { container } = render(<Chip disabled>Some content</Chip>);
    expect(container.firstChild.className).toMatch(/disabled/);
  });
});
