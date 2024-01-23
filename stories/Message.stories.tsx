import { action } from '@storybook/addon-actions';
import { select, boolean, text } from '@storybook/addon-knobs';

import { Message as MessageComponent } from '../src/components';

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

export const Message = () => (
  <MessageComponent
    level={select(
      'level',
      ['success', 'warning', 'failure', 'info'],
      'info',
      'Props'
    )}
    heading={<h3>Lipsum generator</h3>}
    subtitle={text('subtitle', '', 'Props')}
    onDismiss={
      boolean('Dismissable', false, 'Props') ? action('Dismiss') : undefined
    }
  >
    <small>{getLipsumSentences()}</small>
  </MessageComponent>
);
