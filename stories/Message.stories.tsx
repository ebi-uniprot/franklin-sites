import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Message as MessageComponent } from '../src/components';

import { getLipsumSentences } from '../src/mock-data/lipsum';

type StoryProps = React.ComponentProps<typeof MessageComponent> & {
  dismissable: boolean;
};

const meta: Meta<StoryProps> = {
  title: 'Layout/Message',
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
    onDismiss: fn(),
  },
  render: ({ level, dismissable, subtitle, onDismiss }) => (
    <MessageComponent
      level={level}
      heading={<h3>Lipsum generator</h3>}
      subtitle={subtitle}
      onDismiss={dismissable ? onDismiss : undefined}
    >
      <small>{getLipsumSentences()}</small>
    </MessageComponent>
  ),
};
export default meta;

type Story = StoryObj<typeof MessageComponent>;

export const Message: Story = {};
