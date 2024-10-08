import { Meta, StoryObj } from '@storybook/react';
import { ExpandableList as ExpandableListComponent } from '../src/components';

import { getLipsumObjectArray } from '../src/mock-data/lipsum';

const meta: Meta<typeof ExpandableListComponent> = {
  component: ExpandableListComponent,
  title: 'Data/Expandable List',
  argTypes: {
    numberCollapsedItems: {
      name: 'Number of displayed items',
      control: { type: 'number', min: 0, step: 1 },
    },
  },
  args: {
    numberCollapsedItems: 5,
    descriptionString: 'lorem ipsum items',
    displayNumberOfHiddenItems: false,
  },
};

export default meta;

type Story = StoryObj<typeof ExpandableListComponent>;

export const ExpandableList: Story = {
  render: ({
    numberCollapsedItems,
    descriptionString,
    displayNumberOfHiddenItems,
  }) => (
    <ExpandableListComponent
      numberCollapsedItems={numberCollapsedItems}
      descriptionString={descriptionString}
      displayNumberOfHiddenItems={displayNumberOfHiddenItems}
    >
      {getLipsumObjectArray({
        numberElements: 10,
        keys: ['content'],
        type: 'words',
      }).map(({ content }, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <span key={index}>{content}</span>
      ))}
    </ExpandableListComponent>
  ),
};

export const ExpandableListWithExtraAction: Story = {
  render: ({
    numberCollapsedItems,
    descriptionString,
    displayNumberOfHiddenItems,
  }) => (
    <ExpandableListComponent
      numberCollapsedItems={numberCollapsedItems}
      descriptionString={descriptionString}
      displayNumberOfHiddenItems={displayNumberOfHiddenItems}
      extraActions={
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a className="button tertiary expandable-list__action">some link</a>
      }
    >
      {getLipsumObjectArray({
        numberElements: 10,
        keys: ['content'],
        type: 'words',
      }).map(({ content }, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <span key={index}>{content}</span>
      ))}
    </ExpandableListComponent>
  ),
};
