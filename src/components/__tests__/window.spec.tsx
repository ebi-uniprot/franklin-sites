import Window from '../window/window';
import { WindowActionButton } from '../window/window-buttons';
import renderWithBrowserRouter from '../../testHelpers/renderWithBrowserRouter';

const customActionButtons = [
  <WindowActionButton text="No" key="window-action-no" onClick={() => null} />,
  <WindowActionButton
    text="Yes"
    key="window-action-yes"
    onClick={() => null}
    primary
  />,
];

describe('Window component', () => {
  it('should render', () => {
    const { asFragment } = renderWithBrowserRouter(
      <Window
        width="20rem"
        height="15rem"
        title="Alert"
        withHeaderCloseButton
        withFooterCloseButton
        onWindowOpen={() => null}
        onWindowClose={() => null}
        withShadow
        key="full-featured-window"
      >
        Hello, World!
      </Window>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render with custom action buttons', () => {
    const { asFragment } = renderWithBrowserRouter(
      <Window
        width="20rem"
        height="10rem"
        title="Confirm"
        actionButtons={customActionButtons}
        key="basic-dialog-window"
      >
        Complete this action?
      </Window>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
