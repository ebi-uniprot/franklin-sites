import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { Autocomplete as A } from '../src/components';
import { flattenedPaths } from '../src/mock-data/tree-data';

const meta: Meta<typeof A> = {
  component: A,
  title: 'Forms',
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
