import { useState } from 'react';
import { loremIpsum } from 'lorem-ipsum';

import { Accordion, AccordionSearch as AS } from '../src/components';

import { SelectedItem } from '../src/components/accordion-search';

export default {
  title: 'Layout/Accordion',
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

export const AccordionSearch = () => {
  const [selected, setSelected] = useState<SelectedItem[]>([]);

  return (
    <AS
      placeholder="Filter"
      accordionData={accordionData}
      selected={selected}
      onSelect={(accordionId, itemId) => {
        setSelected((selected) => {
          const indexFound = selected.findIndex(
            (item) => item.accordionId === accordionId && item.itemId === itemId
          );
          if (indexFound === -1) {
            return [...selected, { accordionId, itemId }];
          }
          const output = [...selected]; // copy to avoid mutation original
          output.splice(indexFound, 1); // remove at found index
          return output; // return mutated copy
        });
      }}
    />
  );
};
