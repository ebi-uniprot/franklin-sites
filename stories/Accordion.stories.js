import React from 'react';
import { loremIpsum } from 'lorem-ipsum';
import { action } from '@storybook/addon-actions';
import { Accordion, AccordionSearch } from '../src/components';

export default {
  title: 'Data view/Accordion',
  parameters: {
    purposeFunction: {
      function: 'Show/hide blocks of content',
      purpose: 'Minimise information-overload',
    },
  },
};

export const accordion = () => (
  <Accordion title="Title">
    <div>{loremIpsum({ count: 25, units: 'words' })}</div>
  </Accordion>
);

export const accordionCount = () => (
  <Accordion title="Title" count={12}>
    <div>{loremIpsum({ count: 25, units: 'words' })}</div>
  </Accordion>
);

const accordionData = [
  {
    title: 'Gene',
    id: '1',
    items: [
      {
        label: 'BRCA1',
        id: '1-1',
      },
      {
        label: 'BRCA2',
        id: '1-2',
      },
      {
        label: 'TP53',
        id: '1-3',
      },
    ],
  },
  {
    title: 'Organelle',
    id: '2',
    items: [
      {
        label: 'Ribosome',
        id: '2-1',
      },
      {
        label: 'Nucleus',
        id: '2-2',
      },
    ],
  },
];

export const accordionSearch = () => (
  <AccordionSearch
    placeholder="Filter"
    accordionData={accordionData}
    selected={[]}
    onSelect={action()}
  />
);
