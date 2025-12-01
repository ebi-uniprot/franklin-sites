import { CSSProperties, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ToggleSwitchComponent from '../src/components/toggle-switch';

import {
  AiAnnotationsIcon,
  UniParcIcon,
  EvidenceTagIcon,
  HelpIcon,
  InformationIcon,
} from '../src/components';

const LOADING_TIME = 2_000;

const COLOR_OPTIONS = [
  'var(--fr--color-purple-mid)',
  'var(--fr--color-uniparc-dark)',
  'var(--fr--color-sapphire-blue)',
];

const ICON_OPTIONS = {
  AiAnnotations: <AiAnnotationsIcon />,
  UniParc: <UniParcIcon />,
  EvidenceTag: <EvidenceTagIcon />,
  Help: <HelpIcon />,
  Information: <InformationIcon />,
};

const meta: Meta<typeof ToggleSwitchComponent> = {
  component: ToggleSwitchComponent,
  title: 'Forms/ToggleSwitch',
  argTypes: {
    disabled: { control: 'boolean' },
    ariaLabel: { control: 'text' },
    header: { control: 'text' },
    statusOn: { control: 'text' },
    statusOff: { control: 'text' },
    statusLoading: { control: 'text' },
    baseColor: {
      control: 'select',
      name: '--toggle-on-base',
      options: COLOR_OPTIONS,
    },
    icon: {
      options: Object.keys(ICON_OPTIONS),
      mapping: ICON_OPTIONS,
      control: { type: 'select' },
    },
  },
  args: {
    disabled: false,
    ariaLabel: 'ToggleSwitch',
    header: 'AI annotations',
    statusOn: 'Showing AI predictions',
    statusOff: 'Click to enable',
    statusLoading: 'Loading AI predictions…',
    baseColor: 'var(--fr--color-purple-mid)',
    icon: <UniParcIcon />,
  },
};

export default meta;

type Story = StoryObj<typeof ToggleSwitchComponent>;

type ToggleSwitchArgs = {
  disabled?: boolean;
  ariaLabel?: string;
  header: string;
  statusOn: string;
  statusOff: string;
  statusLoading: string;
  baseColor: string;
  icon: React.ReactNode; // ← NEW
};

const ToggleSwitch = ({
  disabled,
  ariaLabel,
  header,
  statusOn,
  statusOff,
  statusLoading,
  baseColor,
  icon,
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
    <ToggleSwitchComponent
      checked={checked}
      disabled={disabled}
      ariaLabel={ariaLabel}
      header={header}
      statusOn={statusOn}
      statusOff={statusOff}
      statusLoading={statusLoading}
      onChange={handleChange}
      icon={icon} // ← NEW
      isLoading={loading}
      style={
        {
          '--toggle-on-base': baseColor,
          maxWidth: 200,
        } as CSSProperties
      }
    />
  );
};

export const Default: Story = {
  render: (args) => <ToggleSwitch {...args} />,
};
