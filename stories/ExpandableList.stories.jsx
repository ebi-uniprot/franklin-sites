import React from 'react';
import { ExpandableList } from '../src/components';
import { getLipsumObjectArray } from '../src/mock-data/lipsum';

export default {
  title: 'Data|Expandable List',
  parameters: {
    purposeFunction: {
      purpose: 'Provide a way of truncating long unordered lists of items.',
      function:
        'Display an unordered list of items which is initially collapsed.',
    },
  },
};

export const expandableList = () => (
  <ExpandableList
    numberCollapsedItems={5}
    descriptionString="Lorem ipsum items"
  >
    {getLipsumObjectArray({
      numberElements: 10,
      keys: ['content'],
      type: 'words',
    })}
  </ExpandableList>
);

export const expandableListWithExtraAction = () => (
  <ExpandableList
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
    })}
  </ExpandableList>
);
