import React from 'react';

import Window from '../components/window/window';
import { WindowActionButton } from '../components/window/window-buttons';

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

const Windows = () => (
  <section className="atoms-section" id="windows">
    <h1>Windows</h1>
    <section>
      <h3>Full Features</h3>
      <div>
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
      </div>
    </section>
    <section>
      <h3>Custom Action Buttons</h3>
      <div>
        <Window
          width="20rem"
          height="10rem"
          title="Confirm"
          actionButtons={customActionButtons}
          key="basic-dialog-window"
        >
          Complete this action?
        </Window>
      </div>
    </section>
  </section>
);

export default Windows;
