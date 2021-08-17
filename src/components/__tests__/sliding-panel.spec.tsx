import { fireEvent, screen, waitFor } from '@testing-library/react';
import { sleep } from 'timing-functions';

import renderWithRouter from '../../testHelpers/renderWithRouter';

import SlidingPanel from '../sliding-panel';

describe('SlidingPanel component', () => {
  it('should call onClose when mouse clicks outside but not inside', async () => {
    const onClose = jest.fn();
    renderWithRouter(
      <>
        <div data-testid="outside-component" />
        <SlidingPanel onClose={onClose} position="left" title="Title">
          Sliding panel content
        </SlidingPanel>
      </>
    );
    fireEvent.click(screen.getByText('Sliding panel content'));
    await waitFor(() => sleep(200));
    fireEvent.click(screen.getByTestId('outside-component'));
    await waitFor(() => expect(onClose).toHaveBeenCalled());
  });

  it('should move focus around correctly', async () => {
    // First render, not mounted yet
    const rendered = renderWithRouter(
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
    const insideInput = screen.getByRole('textbox');
    expect(document.activeElement).toBe(insideInput);

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
