import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { action } from '@storybook/addon-actions';

import ToggleSwitch from '../src/components/toggle-switch';
import { UniParcIcon } from '../src/components';

const LOADING_TIME = 2_000;

const meta: Meta<typeof ToggleSwitch> = {
  component: ToggleSwitch,
  title: 'Forms/ToggleSwitch',
  argTypes: {
    disabled: { control: 'boolean' },
    ariaLabel: { control: 'text' },
    header: { control: 'text' },
    statusOn: { control: 'text' },
    statusOff: { control: 'text' },
    statusLoading: { control: 'text' },
  },
  args: {
    disabled: false,
    ariaLabel: 'ToggleSwitch',
    header: 'AI annotations',
    statusOn: 'Showing AI predictions',
    statusOff: 'Click to enable',
    statusLoading: 'Loading AI predictions…',
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
  statusLoading: string;
};

const ToggleSwitchControlled = ({
  disabled,
  ariaLabel,
  header,
  statusOn,
  statusOff,
  statusLoading,
}: ToggleSwitchArgs) => {
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (requestedState: boolean) => {
    action('onChange')(requestedState);

    if (requestedState) {
      setLoading(true);
      setTimeout(() => {
        setChecked(true);
        setLoading(false);
      }, LOADING_TIME);
    } else {
      setChecked(false);
      setLoading(false);
    }
  };

  return (
    <ToggleSwitch
      checked={checked}
      disabled={disabled}
      ariaLabel={ariaLabel}
      header={header}
      statusOn={statusOn}
      statusOff={statusOff}
      statusLoading={statusLoading}
      onChange={handleChange}
      icon={<UniParcIcon />}
      isLoading={loading}
    />
  );
};

export const Default: Story = {
  render: (args) => <ToggleSwitchControlled {...args} />,
};
