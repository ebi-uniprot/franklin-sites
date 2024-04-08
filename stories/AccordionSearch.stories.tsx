import type { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';
import { AccordionSearch as AccordionSearchComponent } from '../src/components';

import { AccordionItem } from '../src/components/accordion-search';

const accordionData: AccordionItem[] = [
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
export const AccordionSearchRender = () => {
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <AccordionSearchComponent
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

const meta: Meta<typeof AccordionSearchComponent> = {
  component: AccordionSearchComponent,
  title: 'Layout',
  parameters: {
    purposeFunction: {
      function: 'Show/hide blocks of content',
      purpose: 'Minimise information-overload',
    },
  },
  args: {
    accordionData,
    placeholder: 'Filter',
    selected: [],
  },
  render: AccordionSearchRender,
};
export default meta;

type Story = StoryObj<typeof AccordionSearchComponent>;

export const AccordionSearch: Story = {};
