import React from 'react';
import { render } from '@testing-library/react';
import SearchInput from '../search-input';

describe('SearchInput', () => {
  test('should render', () => {
    const { asFragment } = render(<SearchInput placeholder="This is the initial value" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
