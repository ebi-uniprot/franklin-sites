import { action } from '@storybook/addon-actions';
import { select, boolean, text } from '@storybook/addon-knobs';

import { Message } from '../src';

import { getLipsumSentences } from '../src/mock-data/lipsum';

export default {
  title: 'Layout/Message',
  parameters: {
    purposeFunction: {
      function:
        'Give the user some feedback about something happening (tool running, error) or time-boxed information about the website (downtime, etc.)',
      purpose:
        'They are noticeable but do not disrup the user experience. Some can be dismissed.',
    },
  },
};

export const message = () => (
  <Message
    level={select(
      'level',
      ['success', 'warning', 'failure', 'info'],
      'info',
      'Props'
    )}
    subtitle={text('subtitle', '', 'Props')}
    onDismiss={
      boolean('Dismissable', false, 'Props') ? action('Dismiss') : undefined
    }
    forFullPage={boolean('forFullPage', false, 'Props')}
  >
    {getLipsumSentences()}
  </Message>
);
