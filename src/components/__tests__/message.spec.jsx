import { render, fireEvent } from '@testing-library/react';
import Message from '../message';

describe('Message component', () => {
  test('should render', () => {
    const { asFragment } = render(
      <Message>
        <div>Some content</div>
      </Message>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render with a different level', () => {
    const { asFragment } = render(
      <Message level="failure">
        <div>Some content</div>
      </Message>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should trigger a dimiss callback', () => {
    const dismissFn = jest.fn();
    const { getByRole } = render(
      <Message onDismiss={dismissFn}>
        <div>Some content</div>
      </Message>
    );
    fireEvent.click(getByRole('button'));
    expect(dismissFn).toHaveBeenCalled();
  });

  test('should render with a subtitle', () => {
    const { asFragment } = render(
      <Message subtitle={<div>test</div>}>
        <div>Some content</div>
      </Message>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render without default icon', () => {
    const { asFragment } = render(
      <Message noIcon>
        <div>Some content</div>
      </Message>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
