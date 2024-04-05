import { Meta, StoryObj } from '@storybook/react';

import { DecoratedListItem as DecoratedListItemComponent } from '../src/components';

const data = [
  {
    title: 'First',
    content: <div>Number one</div>,
  },
  {
    title: 'Second',
    content: <div>Number two</div>,
  },
  {
    title: 'Third',
    content: <div>Number three</div>,
  },
  {
    title: 'Fourth',
    content: <div>Number four</div>,
    // eslint-disable-next-line jsx-a11y/control-has-associated-label, jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid
    link: <a />,
  },
];

const meta: Meta<typeof DecoratedListItemComponent> = {
  component: DecoratedListItemComponent,
  title: 'Data/Decorated List Item',
  parameters: {
    purposeFunction: {
      purpose: 'Provides a re-usable styled list element.',
      function: 'Display a list item in various visual styles.',
    },
  },
  args: {
    compact: true,
    altStyle: true,
  },
  render: ({ compact, altStyle }) => (
    <div className="uniprot-grid">
      {data.map((i) => (
        <div key={i.title} className="uniprot-grid-cell--span-3">
          <DecoratedListItemComponent
            compact={compact}
            altStyle={altStyle}
            link={i.link}
          >
            <h3>{i.title}</h3>
          </DecoratedListItemComponent>
        </div>
      ))}
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof DecoratedListItemComponent>;

export const DecoratedListItem: Story = {};
