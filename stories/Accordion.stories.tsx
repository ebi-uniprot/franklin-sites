import { useState } from 'react';
import { loremIpsum } from 'lorem-ipsum';

import { Accordion, AccordionSearch as AS } from '../src/components';

import { AccordionItem } from '../src/components/accordion-search';

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

const accordionData: AccordionItem<string>[] = [
  {
    label: 'Data',
    id: 'data',
    items: [
      {
        label: 'Gene',
        id: 'gene',
        items: [
          {
            label: 'BRCA1',
            id: 'brca1',
          },
          {
            label: 'BRCA2',
            id: 'brca2',
          },
          {
            label: 'TP53',
            id: 'tp53',
          },
        ],
      },
      {
        label: 'Organelle',
        id: 'organelle',
        items: [
          {
            label: 'Ribosome',
            id: 'ribosome',
          },
          {
            label: 'Nucleus',
            id: 'nucleus',
          },
        ],
      },
    ],
  },
  {
    label: 'External links',
    id: 'external-links',
    items: [
      {
        label: 'Sequence',
        id: 'sequence',
        items: [
          {
            label: 'CCDS',
            id: 'ccds',
          },
          {
            label: 'PIR',
            id: 'pir',
          },
        ],
      },
      {
        label: '3d structure',
        id: '3d-structure',
        items: [
          {
            label: 'AlphaFoldDB',
            id: 'alphafolddb',
          },
          {
            label: 'BMRB',
            id: 'bmrb',
          },
        ],
      },
    ],
  },
];

export const AccordionSearch = () => {
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <AS
      placeholder="Filter"
      accordionData={accordionData}
      selected={selected}
      onSelect={(itemId) => {
        setSelected((selected) => {
          const index = selected.indexOf(itemId);
          return index === -1
            ? [...selected, itemId]
            : [...selected.slice(0, index), ...selected.slice(index + 1)];
        });
      }}
    />
  );
};
