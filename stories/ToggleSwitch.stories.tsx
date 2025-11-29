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
    statusOn: { control: 'text' },
    statusOff: { control: 'text' },
  },
  args: {
    disabled: false,
    ariaLabel: 'ToggleSwitch',
    header: 'AI annotations',
    statusOn: 'Showing AI predictions',
    statusOff: 'Click to enable',
  },
};

export default meta;

type Story = StoryObj<typeof ToggleSwitch>;

type ToggleSwitchArgs = {
  disabled?: boolean;
  ariaLabel?: string;
  header: string;
  statusOn: string;
  statusOff: string;
};

const ToggleSwitchControlled = ({
  disabled,
  ariaLabel,
  header,
  statusOn,
  statusOff,
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
      statusOn={statusOn}
      statusOff={statusOff}
      onChange={handleChange}
      icon={<UniParcIcon />}
    />
  );
};

export const Default: Story = {
  render: (args) => <ToggleSwitchControlled {...args} />,
};
