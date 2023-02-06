import { loremIpsum } from 'lorem-ipsum';
import { Window } from '../src';

export default {
  title: 'Layout/Window',
  parameters: {
    purposeFunction: {
      purpose:
        'Improve the User Experience by providing another way of conent-isoloation.',
      function:
        'Provide reusable window component with various configurations possible.',
    },
  },
};

export const window = () => (
  <Window
    title="Alert"
    key="full-featured-window"
    withHeaderCloseButton
    withFooterCloseButton
    withShadow
  >
    {loremIpsum({ count: 25, units: 'words' })}
  </Window>
);
