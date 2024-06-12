import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { TreeSelect as TS } from '../src/components';

import { treeData } from '../src/mock-data/tree-data';

const meta: Meta<typeof TS> = {
  title: 'Forms/Tree Select',
  component: TS,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
  },
  args: {
    label: 'Select',
    variant: 'primary',
  },
};

export default meta;

type Story = StoryObj<typeof TS>;

export const TreeSelect: Story = {
  render: ({ label, variant }) => (
    <TS
      label={label}
      data={treeData}
      onSelect={action('onSelect')}
      variant={variant}
    />
  ),
};

export const TreeSelectWithAutocomplete: Story = {
  render: ({ label, variant }) => (
    <TS
      label={label}
      data={treeData}
      onSelect={action('onSelect')}
      autocomplete
      autocompletePlaceholder="Search for item"
      autocompleteFilter
      variant={variant}
    />
  ),
};
