import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { action } from '@storybook/addon-actions';

import ToggleSwitch from '../src/components/toggle-switch';
import { UniParcIcon } from '../src/components';

const meta: Meta<typeof ToggleSwitch> = {
  component: ToggleSwitch,
  title: 'Forms/ToggleSwitch',
  argTypes: {
    disabled: { control: 'boolean' },
    ariaLabel: { control: 'text' },
    header: { control: 'text' },
    status: { control: 'text' },
  },
  args: {
    disabled: false,
    ariaLabel: 'ToggleSwitch',
    header: 'AI annotations',
    status: 'Showing AI predictions',
  },
};

export default meta;

type Story = StoryObj<typeof ToggleSwitch>;

type ToggleSwitchArgs = {
  disabled?: boolean;
  ariaLabel?: string;
  header?: string;
  status?: string;
};

const ToggleSwitchControlled = ({
  disabled,
  ariaLabel,
  header,
  status,
}: ToggleSwitchArgs) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (next: boolean) => {
    setChecked(next);
    action('onChange')(next);
  };

  return (
    <ToggleSwitch
      checked={checked}
      disabled={disabled}
      ariaLabel={ariaLabel}
      header={header}
      status={status}
      onChange={handleChange}
      icon={<UniParcIcon />}
    />
  );
};

const ToggleSwitchWithMockupContent = ({
  disabled,
  ariaLabel,
}: ToggleSwitchArgs) => {
  const [checked, setChecked] = useState(true);

  const handleChange = (next: boolean) => {
    setChecked(next);
    action('onChange')(next);
  };

  return (
    <ToggleSwitch
      checked={checked}
      disabled={disabled}
      ariaLabel={ariaLabel}
      header="AI annotations"
      status="Showing AI predictions"
      onChange={handleChange}
      icon={<UniParcIcon />}
    />
  );
};

export const Default: Story = {
  render: (args) => <ToggleSwitchControlled {...args} />,
};

export const WithLabelAndStatus: Story = {
  render: (args) => <ToggleSwitchWithMockupContent {...args} />,
};

export const Disabled: Story = {
  render: ({ ariaLabel, header, status }) => (
    <ToggleSwitch
      checked={false}
      disabled
      ariaLabel={ariaLabel}
      header={header}
      status={status}
      onChange={action('onChange')}
      icon={<UniParcIcon />}
    />
  ),
};
