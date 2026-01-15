import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { AccordionSearch as AccordionSearchComponent } from '../src/components';

import accordionData from '../src/components/__mocks__/accordionData';

const AccordionSearchRender = () => {
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
