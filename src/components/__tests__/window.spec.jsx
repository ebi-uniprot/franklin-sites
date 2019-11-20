import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Window from '../window/window';
import { WindowActionButton } from '../window/window-buttons';

const customActionButtons = [
  <WindowActionButton
    text="No"
    key="window-action-no"
    onClick={() => null}
  />,
  <WindowActionButton
    text="Yes"
    key="window-action-yes"
    onClick={() => null}
    primary
  />,
];

describe('Window component', () => {
  test('should render', () => {
    const { asFragment } = render(
      <Router>
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
      </Router>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render with custom action buttons', () => {
    const { asFragment } = render(
      <Router>
        <Window
          width="20rem"
          height="10rem"
          title="Confirm"
          actionButtons={customActionButtons}
          key="basic-dialog-window"
        >
          Complete this action?
        </Window>
      </Router>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
