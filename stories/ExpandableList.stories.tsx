import { withKnobs, number, text, boolean } from '@storybook/addon-knobs';

import { ExpandableList as EvidenceTagComponent } from '../src/components';

import { getLipsumObjectArray } from '../src/mock-data/lipsum';

export default {
  title: 'Data/Expandable List',
  decorators: [withKnobs()],
  parameters: {
    purposeFunction: {
      purpose: 'Provide a way of truncating long unordered lists of items.',
      function:
        'Display an unordered list of items which is initially collapsed.',
    },
  },
};

export const ExpandableList = () => (
  <EvidenceTagComponent
    numberCollapsedItems={number(
      'Number of displayed items',
      5,
      { min: 0, step: 1 },
      'Props'
    )}
    descriptionString={text('Description string', 'lorem ipsum items', 'Props')}
    displayNumberOfHiddenItems={boolean(
      'Display number of hidden items',
      false,
      'Props'
    )}
  >
    {getLipsumObjectArray({
      numberElements: 10,
      keys: ['content'],
      type: 'words',
    }).map(({ id, content }) => (
      <span key={id}>{content}</span>
    ))}
  </EvidenceTagComponent>
);

export const ExpandableListWithExtraAction = () => (
  <EvidenceTagComponent
    numberCollapsedItems={5}
    descriptionString="Lorem ipsum items"
    extraActions={
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a className="button tertiary expandable-list__action">some link</a>
    }
  >
    {getLipsumObjectArray({
      numberElements: 10,
      keys: ['content'],
      type: 'words',
    }).map(({ id, content }) => (
      <span key={id}>{content}</span>
    ))}
  </EvidenceTagComponent>
);
