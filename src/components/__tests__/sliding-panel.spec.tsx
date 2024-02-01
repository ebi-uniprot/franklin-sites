import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { sleep } from 'timing-functions';

import SlidingPanel from '../sliding-panel';

describe('SlidingPanel component', () => {
  it('should call onClose when mouse clicks outside but not inside', async () => {
    const onClose = jest.fn();
    render(
      <>
        <div data-testid="outside-element" />
        <SlidingPanel onClose={onClose} position="left" title="Title">
          Sliding panel content
        </SlidingPanel>
      </>
    );
    fireEvent.click(screen.getByText('Sliding panel content'));
    await sleep(200);
    fireEvent.click(screen.getByTestId('outside-element'));
    await waitFor(() => expect(onClose).toHaveBeenCalledWith('outside'));
  });

  it('should call onClose when closing through the close button', async () => {
    const onClose = jest.fn();
    render(
      <SlidingPanel onClose={onClose} position="left" title="Title">
        Sliding panel content
      </SlidingPanel>
    );
    fireEvent.click(screen.getByRole('button', { name: /close/i }));
    await waitFor(() => expect(onClose).toHaveBeenCalledWith('x-button'));
  });

  it('should call onClose when pressing escape (within and outside the panel)', async () => {
    const onClose = jest.fn();
    render(
      <>
        <input data-testid="outside-element" />
        <SlidingPanel onClose={onClose} position="left" title="Title">
          <input data-testid="inside-element" />
        </SlidingPanel>
      </>
    );
    fireEvent.keyDown(screen.getByTestId('inside-element'), {
      key: 'Escape',
      code: 'Escape',
    });
    await waitFor(() => expect(onClose).toHaveBeenCalledWith('escape'));
    onClose.mockClear();
    fireEvent.keyDown(screen.getByTestId('outside-element'), {
      key: 'Escape',
      code: 'Escape',
    });
    await waitFor(() => expect(onClose).toHaveBeenCalledWith('escape'));
  });

  it('should move focus around correctly', async () => {
    // First render, not mounted yet
    const rendered = render(
      <>
        <div data-testid="outside-component" />
        <button type="button">Button</button>
      </>
    );
    const outsideButton = screen.getByRole('button');
    outsideButton.focus();
    expect(document.activeElement).toBe(outsideButton); // sanity check

    // Second render, mounted
    rendered.rerender(
      <>
        <div data-testid="outside-component" />
        <button type="button">Button</button>
        <SlidingPanel onClose={jest.fn()} position="left" title="Title">
          Sliding panel content
          <input type="text" />
        </SlidingPanel>
      </>
    );
    const closeButton = screen.getByRole('button', { name: 'Close panel' });
    expect(document.activeElement).toBe(closeButton);

    // Third render, unmounted
    rendered.rerender(
      <>
        <div data-testid="outside-component" />
        <button type="button">Button</button>
      </>
    );
    expect(document.activeElement).toBe(outsideButton);
  });
});
