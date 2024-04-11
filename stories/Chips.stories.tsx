import { CSSProperties } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { action } from '@storybook/addon-actions';

import { Chip as ChipComponent } from '../src/components';

import colors from '../src/styles/colours.json';

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
    color: { control: 'select', name: '--main-chip-color', options: colors },
  },
  args: {
    title: 'this is a chip',
    compact: false,
    disabled: false,
    className: 'primary',
    removable: false,
  },
  render: ({ title, compact, className, disabled, color, removable }) => (
    <ChipComponent
      title={title}
      compact={compact}
      disabled={disabled}
      className={className}
      onClick={action('click on chip')}
      onKeyPress={action('key press on primary')}
      onRemove={removable ? action('Remove chip') : undefined}
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
