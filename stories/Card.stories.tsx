import React, { ReactNode } from 'react';
import { Meta, StoryObj } from '@storybook/react';

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

const meta: Meta<
  React.ComponentProps<typeof CardComponent> & {
    hasHeader: boolean;
    hasCheckbox: boolean;
    hasHeaderSeparator: boolean;
    hasLinks: boolean;
  }
> = {
  component: CardComponent,
  title: 'Layout/Card',
  parameters: {
    purposeFunction: {
      function:
        'Provide a contained section to show content for a given category.',
      purpose:
        'Create visually delimited areas to allow for easier scanning of content.',
    },
  },
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

type Story = StoryObj<typeof CardComponent>;

export const Card: Story = {};
