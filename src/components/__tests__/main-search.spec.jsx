import { render, fireEvent } from '@testing-library/react';
import MainSearch from '../main-search';

describe('MainSearch component', () => {
  const handleSubmit = jest.fn();
  const handleChange = jest.fn();
  const props = {
    onChange: handleChange,
    onSubmit: handleSubmit,
  };
  const namespaces = { one: 'One', two: 'Two', three: 'Three' };

  test('should render', () => {
    const { asFragment } = render(<MainSearch {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render with namespaces selector', () => {
    const { asFragment } = render(
      <MainSearch {...props} namespaces={namespaces} selectedNamespace="one" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should submit the search term', () => {
    const { getByTestId } = render(<MainSearch {...props} />);
    fireEvent.submit(getByTestId('main-search-form'));
    expect(handleSubmit).toHaveBeenCalled();
  });

  test('should detect the search term', () => {
    const { getByTestId } = render(<MainSearch {...props} />);
    fireEvent.change(getByTestId('main-search-input'), {
      target: { value: 'foo' },
    });
    expect(handleChange).toHaveBeenCalledWith('foo');
  });

  test('should set searchTerm', () => {
    const { getByTestId } = render(<MainSearch {...props} searchTerm="blah" />);
    expect(getByTestId('main-search-input').value).toBe('blah');
  });
});
