import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { action } from '@storybook/addon-actions';

import { ToggleSwitch as ToggleSwitchComponent } from '../src/components';

const meta: Meta<typeof ToggleSwitchComponent> = {
  component: ToggleSwitchComponent,
  title: 'Forms/ToggleSwitch',
  argTypes: {
    disabled: { control: 'boolean' },
    ariaLabel: { control: 'text' },
  },
  args: {
    disabled: false,
    ariaLabel: 'Toggle',
  },
};

export default meta;

type Story = StoryObj<typeof ToggleSwitchComponent>;

type ToggleArgs = {
  disabled?: boolean;
  ariaLabel?: string;
};

const ToggleSwitchControlled = ({ disabled, ariaLabel }: ToggleArgs) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (nextChecked: boolean) => {
    setChecked(nextChecked);
    action('onChange')(nextChecked);
  };

  return (
    <ToggleSwitchComponent
      checked={checked}
      disabled={disabled}
      ariaLabel={ariaLabel}
      onChange={handleChange}
    />
  );
};

const ToggleSwitchWithLabel = ({ disabled, ariaLabel }: ToggleArgs) => {
  const [checked, setChecked] = useState(true);

  const handleChange = (nextChecked: boolean) => {
    setChecked(nextChecked);
    action('onChange')(nextChecked);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <ToggleSwitchComponent
        checked={checked}
        disabled={disabled}
        ariaLabel={ariaLabel}
        onChange={handleChange}
      />
      <span>Notifications</span>
    </div>
  );
};

export const ToggleSwitch: Story = {
  render: (args) => <ToggleSwitchControlled {...args} />,
};

export const WithLabel: Story = {
  render: (args) => <ToggleSwitchWithLabel {...args} />,
};

export const Disabled: Story = {
  render: ({ ariaLabel }) => (
    <ToggleSwitchComponent
      checked={false}
      disabled
      ariaLabel={ariaLabel}
      onChange={action('onChange')}
    />
  ),
};
