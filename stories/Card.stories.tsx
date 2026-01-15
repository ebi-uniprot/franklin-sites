import React, { type ReactNode } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Card as CardComponent, SwissProtIcon } from '../src/components';

import { getLipsumSentences } from '../src/mock-data/lipsum';

const ActionLink = ({
  name,
  link,
  color,
}: {
  name: ReactNode;
  link: string;
  color?: string;
}) => (
  <a
    href={link}
    key={link}
    style={{ borderBottom: color ? `0.125rem solid ${color}` : undefined }}
  >
    {name}
  </a>
);

const links = [
  {
    name: '10 Protein Interactions',
    link: '#red',
    color: 'red',
  },
  {
    name: '9 Pathways',
    link: '#blue',
    color: 'blue',
  },
  {
    name: '5 Diseases',
    link: '#diseases',
    color: '#bada55',
  },
  {
    name: '72 Variants',
    link: '#burlywood',
    color: 'burlywood',
  },
  {
    key: 'swissprot',
    name: (
      <>
        <SwissProtIcon width="1.5ch" /> Reviewed
      </>
    ),
    link: '#reviewed',
  },
];

type StoryProps = React.ComponentProps<typeof CardComponent> & {
  hasHeader: boolean;
  hasCheckbox: boolean;
  hasHeaderSeparator: boolean;
  hasLinks: boolean;
};

const meta: Meta<StoryProps> = {
  component: CardComponent,
  title: 'Layout/Card',
  argTypes: {
    hasHeader: {
      control: { type: 'boolean' },
      name: 'header',
    },
    hasCheckbox: {
      control: { type: 'boolean' },
      name: 'checkbox (only if header)',
    },
    hasHeaderSeparator: {
      control: { type: 'boolean' },
      name: 'header separator',
    },
    hasLinks: {
      control: { type: 'boolean' },
      name: 'links',
    },
  },
  args: {
    hasHeader: true,
    hasHeaderSeparator: true,
  },
  render: ({ hasHeader, hasCheckbox, hasHeaderSeparator, hasLinks }) => (
    <CardComponent
      header={
        hasHeader ? (
          <>
            {hasCheckbox && <input type="checkbox" />}
            <h2>
              Title{' '}
              <a className="medium" href="/#">
                APOE_HUMAN - P02649
              </a>
            </h2>
          </>
        ) : undefined
      }
      headerSeparator={hasHeaderSeparator}
      links={
        hasLinks
          ? links.map(({ name, color, link }) => (
              <ActionLink
                name={name}
                color={color}
                link={`${window.parent.location.href.split('#')[0]}${link}`}
              />
            ))
          : undefined
      }
    >
      {getLipsumSentences()}
    </CardComponent>
  ),
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Card: Story = {};
