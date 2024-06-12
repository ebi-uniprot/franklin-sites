import { loremIpsum } from 'lorem-ipsum';
import { Window as WindowComponent } from '../src/components';

export default {
  title: 'Layout/Window',
};

export const Window = () => (
  <WindowComponent
    title="Alert"
    key="full-featured-window"
    withHeaderCloseButton
    withFooterCloseButton
    withShadow
  >
    {loremIpsum({ count: 25, units: 'words' })}
  </WindowComponent>
);
