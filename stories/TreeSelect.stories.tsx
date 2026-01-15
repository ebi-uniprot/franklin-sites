import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

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
    onSelect: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof TS>;

export const TreeSelect: Story = {
  render: ({ label, variant, onSelect }) => (
    <TS label={label} data={treeData} onSelect={onSelect} variant={variant} />
  ),
};

export const TreeSelectWithAutocomplete: Story = {
  render: ({ label, variant, onSelect }) => (
    <TS
      label={label}
      data={treeData}
      onSelect={onSelect}
      autocomplete
      autocompletePlaceholder="Search for item"
      autocompleteFilter
      variant={variant}
    />
  ),
};
