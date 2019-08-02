import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import SearchInput from '../search-input';

afterEach(cleanup);

describe('SearchInput', () => {
  test('should render', () => {
    const { asFragment } = render(<SearchInput placeholder="This is the initial value" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should focus on text input when suffix is clicked', () => {
    const { queryByTestId } = render(<SearchInput placeholder="This is the initial value" />);
    const suffix = queryByTestId('search-input-suffix');
    fireEvent.click(suffix);
    const input = queryByTestId('search-input');
    expect(document.activeElement).toEqual(input);
  });
});
