import { screen, render, fireEvent } from '@testing-library/react';

import SearchInput from '../search-input';

describe('SearchInput', () => {
  it('should render', () => {
    const { asFragment } = render(
      <SearchInput placeholder="This is the initial value" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should focus on text input when suffix is clicked', () => {
    render(<SearchInput placeholder="This is the initial value" />);
    const suffix = screen.getByTestId('search-input-suffix');
    fireEvent.click(suffix);
    const input = screen.queryByTestId('search-input');
    expect(document.activeElement).toEqual(input);
  });

  it('should should not call onChange when no value is present and suffix is clicked', () => {
    const onChange = jest.fn();
    render(<SearchInput onChange={onChange} />);
    const suffix = screen.getByTestId('search-input-suffix');
    fireEvent.click(suffix);
    expect(onChange).not.toHaveBeenCalled();
  });

  it('should call onChange with "" when value is present and suffix is clicked', () => {
    const onChange = jest.fn();
    render(<SearchInput onChange={onChange} value="foo" />);
    const suffix = screen.getByTestId('search-input-suffix');
    fireEvent.click(suffix);
    expect(onChange).toHaveBeenCalled();
  });

  it('should not call onChange with "" when value is present and suffix is clicked and isLoading', () => {
    const onChange = jest.fn();
    render(<SearchInput onChange={onChange} value="foo" isLoading />);
    const suffix = screen.getByTestId('search-input-suffix');
    fireEvent.click(suffix);
    expect(onChange).not.toHaveBeenCalledWith({ target: { value: '' } });
  });
});
