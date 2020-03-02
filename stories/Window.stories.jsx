import React from 'react';
import { loremIpsum } from 'lorem-ipsum';
import { Window } from '../src/components';

export default {
  title: 'Layout|Window',
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
    width="20rem"
    heigh="15rem"
    title="Alert"
    key="full-featured-window"
    withHeaderCloseButton
    withFooterCloseButton
    withShadow
  >
    {loremIpsum({ count: 25, units: 'words' })}
  </Window>
);
