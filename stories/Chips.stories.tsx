import { type CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Chip as ChipComponent } from '../src/components';

interface Style extends CSSProperties {
  // TODO: define and extend the supported custom properties in franklin
  // TODO: find a way to expose them globally when using franklin elements
  '--main-chip-color': string;
}

type StoryProps = React.ComponentProps<typeof ChipComponent> & {
  removable: boolean;
};

const meta: Meta<StoryProps> = {
  component: ChipComponent,
  title: 'Core/Chip',
  argTypes: {
    className: {
      options: ['primary', 'secondary'],
      control: { type: 'select' },
    },
    color: {
      control: 'select',
      name: '--main-chip-color',
      options: [
        'var(--fr--color-sapphire-blue)',
        'var(--fr--color-sea-blue)',
        'var(--fr--color-vivid-cerulean)',
        'var(--fr--color-medium-turquoise)',
        'var(--fr--color-gainsborough)',
        'white',
        'blue',
      ],
    },
  },
  args: {
    title: 'this is a chip',
    compact: false,
    disabled: false,
    className: 'primary',
    removable: false,
    onClick: fn(),
    onKeyPress: fn(),
    onRemove: fn(),
  },
  render: ({
    title,
    compact,
    className,
    disabled,
    color,
    removable,
    onClick,
    onKeyPress,
    onRemove,
  }) => (
    <ChipComponent
      title={title}
      compact={compact}
      disabled={disabled}
      className={className}
      onClick={onClick}
      onKeyPress={onKeyPress}
      onRemove={removable ? onRemove : undefined}
      style={
        {
          '--main-chip-color': color,
        } as Style
      }
    >
      Chip content
    </ChipComponent>
  ),
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Chip: Story = {};
