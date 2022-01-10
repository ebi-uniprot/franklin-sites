import { render, fireEvent, screen } from '@testing-library/react';

import Message from '../message';

describe('Message component', () => {
  it('should render', () => {
    const { asFragment } = render(
      <Message>
        <div>Some content</div>
      </Message>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render with a different level', () => {
    const { asFragment } = render(
      <Message level="failure">
        <div>Some content</div>
      </Message>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should trigger a dimiss callback', () => {
    const dismissFn = jest.fn();
    render(
      <Message onDismiss={dismissFn}>
        <div>Some content</div>
      </Message>
    );
    fireEvent.click(screen.getByRole('button'));
    expect(dismissFn).toHaveBeenCalled();
  });

  it('should render with a subtitle', () => {
    const { asFragment } = render(
      <Message subtitle={<div>test</div>}>
        <div>Some content</div>
      </Message>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render without default icon', () => {
    const { asFragment } = render(
      <Message noIcon>
        <div>Some content</div>
      </Message>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
