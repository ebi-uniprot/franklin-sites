import { screen, render, fireEvent } from '@testing-library/react';

import SearchInput from '../search-input';

describe('SearchInput', () => {
  test('should render', () => {
    const { asFragment } = render(
      <SearchInput placeholder="This is the initial value" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should focus on text input when suffix is clicked', () => {
    render(<SearchInput placeholder="This is the initial value" />);
    const suffix = screen.getByTestId('search-input-suffix');
    fireEvent.click(suffix);
    const input = screen.queryByTestId('search-input');
    expect(document.activeElement).toEqual(input);
  });
});
