import { loremIpsum } from 'lorem-ipsum';
import { action } from '@storybook/addon-actions';

import { ButtonModal } from '../src/components';

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
  <ButtonModal
    buttonText="click me"
    title="Example modal window"
    onWindowOpen={action('hello')}
  >
    {loremIpsum(45)}
  </ButtonModal>
);
