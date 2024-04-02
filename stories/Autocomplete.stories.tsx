import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { Autocomplete as A } from '../src/components';
import { flattenedPaths } from '../src/mock-data/tree-data';

const meta: Meta<typeof A> = {
  component: A,
  title: 'Forms',
  parameters: {
    purposeFunction: {
      function: 'Search through an array to make a selection',
      purpose: 'Allow selection of item from flat data set',
    },
  },
  args: {
    data: flattenedPaths,
    onSelect: action('onSelect'),
    placeholder: 'Item A',
    filter: true,
    isLoading: false,
  },
};

export default meta;

type Story = StoryObj<typeof A>;

export const Autocomplete: Story = {};
