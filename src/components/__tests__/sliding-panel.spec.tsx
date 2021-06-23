import { fireEvent, screen } from '@testing-library/react';

import renderWithRouter from '../../testHelpers/renderWithRouter';

import SlidingPanel from '../sliding-panel';

describe('SlidingPanel component', () => {
  const onClose = jest.fn();

  beforeEach(() => {
    renderWithRouter(
      <>
        <div data-testid="outside-component" />
        <SlidingPanel onClose={onClose} position="left" title="Title">
          Sliding panel content
        </SlidingPanel>
      </>
    );
  });

  afterEach(jest.clearAllMocks);

  test('should call onClose when mouse clicks outside', async () => {
    fireEvent.click(screen.getByTestId('outside-component'));
    expect(onClose).toHaveBeenCalled();
  });

  test('should not call onClose when mouse clicks inside', async () => {
    const inside = screen.getByText('Sliding panel content');
    fireEvent.click(inside);
    expect(onClose).not.toHaveBeenCalled();
  });
});
