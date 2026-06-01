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
    compact: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    stableWidthLabel: { control: 'text' },
    disabled: { control: 'boolean' },
    ariaLabel: { control: 'text' },
    header: { control: 'text' },

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
    compact: false,
    fullWidth: false,
    stableWidthLabel: '',
    disabled: false,
    ariaLabel: 'ToggleSwitch',
    header: 'AI annotations',
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
    baseColor,
    icon,
    onChange,
    compact,
    fullWidth,
    stableWidthLabel,
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
      icon={icon}
      onChange={handleChange}
      isLoading={loading}
      compact={compact}
      fullWidth={fullWidth}
      stableWidthLabel={stableWidthLabel || undefined}
      style={
        {
          '--toggle-on-base': baseColor,
          // Cap width only when fullWidth is on; with fullWidth off the
          // toggle hugs its content naturally and an explicit maxWidth
          // would create dead space inside the button.
          ...(fullWidth ? { maxWidth: 250 } : {}),
        } as CSSProperties
      }
    />
  );
};

export const Default: Story = {
  render: (args) => <ToggleSwitchStoryWrapper {...args} />,
};
