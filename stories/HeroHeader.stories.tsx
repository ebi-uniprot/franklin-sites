import { Meta, StoryObj } from '@storybook/react';

import { loremIpsum } from 'lorem-ipsum';

import { HeroHeader as HH } from '../src/components';

const meta: Meta<typeof HH> = {
  component: HH,
  title: 'Layout/Hero Header',
  argTypes: {
    title: { control: 'text' },
    footer: { control: 'text' },
  },

  args: { title: 'Title', footer: loremIpsum({ count: 25, units: 'words' }) },
  render: ({ title, footer }) => (
    <HH title={title} footer={footer}>
      <input type="text" />
    </HH>
  ),
};

export default meta;

type Story = StoryObj<typeof HH>;

export const HeroHeader: Story = {};
