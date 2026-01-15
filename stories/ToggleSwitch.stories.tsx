import { useState, type CSSProperties, type ReactNode } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import ToggleSwitch from '../src/components/toggle-switch';
import {
  AiAnnotationsIcon,
  UniParcIcon,
  EvidenceTagIcon,
  HelpIcon,
  InformationIcon,
} from '../src/components';

const LOADING_TIME = 2000;

const COLOR_OPTIONS = [
  'var(--fr--color-purple-mid)',
  'var(--fr--color-uniparc-dark)',
  'var(--fr--color-sapphire-blue)',
] as const;

const ICON_OPTIONS: Record<string, ReactNode> = {
  AiAnnotations: <AiAnnotationsIcon />,
  UniParc: <UniParcIcon />,
  EvidenceTag: <EvidenceTagIcon />,
  Help: <HelpIcon />,
  Information: <InformationIcon />,
};

type StoryArgs = React.ComponentProps<typeof ToggleSwitch> & {
  baseColor: string;
  icon: ReactNode;
};

const meta: Meta<StoryArgs> = {
  title: 'Forms/ToggleSwitch',
  component: ToggleSwitch,
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
    onChange: fn(), // SB10-style action spy
  },
};

export default meta;

type Story = StoryObj<StoryArgs>;

const ToggleSwitchStoryWrapper = (props: StoryArgs) => {
  const {
    disabled,
    ariaLabel,
    header,
    statusOn,
    statusOff,
    statusLoading,
    baseColor,
    icon,
    onChange,
  } = props;

  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (requestedState: boolean) => {
    onChange?.(requestedState);

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
      icon={icon}
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
  render: (args) => <ToggleSwitchStoryWrapper {...args} />,
};
