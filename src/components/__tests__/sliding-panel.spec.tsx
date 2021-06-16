import renderWithRouter from '../../testHelpers/renderWithRouter';

import SlidingPanel from '../sliding-panel';

describe('SlidingPanel component', () => {
  test('should render', () => {
    const onClose = jest.fn();
    const { asFragment } = renderWithRouter(
      <SlidingPanel onClose={onClose} position="left" />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
