import { loremIpsum } from 'lorem-ipsum';

import { ButtonModal } from '../src';

export default {
  title: 'Layout/Modal',
  parameters: {
    purposeFunction: {
      purpose: 'Display extra contextual information, offer the user choices',
      function:
        'Overlay content on top of the current page, obscuring the page content.',
    },
  },
};

export const modal = () => (
  <ButtonModal buttonText="click me" title="Example modal window">
    {loremIpsum({ count: 45 })}
  </ButtonModal>
);
