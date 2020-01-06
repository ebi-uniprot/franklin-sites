import React from 'react';
import { ExpandableList } from '../src/components';
import getLipsumObjectArray from '../src/app/common/lipsum';

export default {
  title: 'Data view/Expandable List',
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
