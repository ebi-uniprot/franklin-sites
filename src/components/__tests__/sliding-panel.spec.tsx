import { fireEvent, screen } from '@testing-library/react';

import renderWithRouter from '../../testHelpers/renderWithRouter';

import SlidingPanel from '../sliding-panel';

describe('SlidingPanel component', () => {
  test('should click outside', () => {
    const onClose = jest.fn();
    renderWithRouter(
      <>
        <div data-testid="outside-component" />
        <SlidingPanel onClose={onClose} position="left" title="Title">
          Sliding panel content
        </SlidingPanel>
      </>
    );
    fireEvent.click(screen.getByTestId('outside-component'));
    expect(onClose).toHaveBeenCalled();
  });
});
