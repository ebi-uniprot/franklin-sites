import { action } from '@storybook/addon-actions';

import { Meta, StoryObj } from '@storybook/react';
import { Message as MessageComponent } from '../src/components';

import { getLipsumSentences } from '../src/mock-data/lipsum';

type StoryProps = React.ComponentProps<typeof MessageComponent> & {
  dismissable: boolean;
};

const meta: Meta<StoryProps> = {
  title: 'Layout/Message',
  parameters: {
    purposeFunction: {
      function:
        'Give the user some feedback about something happening (tool running, error) or time-boxed information about the website (downtime, etc.)',
      purpose:
        'They are noticeable but do not disrup the user experience. Some can be dismissed.',
    },
  },
  argTypes: {
    level: {
      options: ['success', 'warning', 'failure', 'info'],
      control: { type: 'select' },
    },
  },

  args: {
    subtitle: 'subtitle',
    level: 'info',
    dismissable: false,
  },
  render: ({ level, dismissable, subtitle }) => (
    <MessageComponent
      level={level}
      heading={<h3>Lipsum generator</h3>}
      subtitle={subtitle}
      onDismiss={dismissable ? action('Dismiss') : undefined}
    >
      <small>{getLipsumSentences()}</small>
    </MessageComponent>
  ),
};
export default meta;

type Story = StoryObj<typeof MessageComponent>;

export const Message: Story = {};
