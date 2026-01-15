import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { useState } from 'react';
import { sleep } from 'timing-functions';

import {
  Sequence as SequenceComponent,
  SequenceTools as SequenceToolsComponent,
  Button,
} from '../src/components';

import sequenceData from '../src/mock-data/sequence-data';

const meta: Meta<typeof SequenceComponent> = {
  component: SequenceComponent,
  title: 'Biocomponents/Sequence',
  args: {
    onBlastClick: fn(),
    onCopy: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof SequenceComponent>;

export const Sequence: Story = {
  render: ({ onBlastClick, onCopy }) => (
    <SequenceComponent
      sequence={sequenceData}
      accession="P05067"
      downloadUrl="https://wwwdev.ebi.ac.uk/uniprot/api/uniprotkb/accession/P05067.fasta"
      onBlastClick={onBlastClick}
      onCopy={onCopy}
      addToBasketButton={
        <Button variant="tertiary" onClick={fn()}>
          Add To Basket
        </Button>
      }
    />
  ),
};

export const SequenceWithoutActionBar: Story = {
  render: () => (
    <SequenceComponent sequence={sequenceData} showActionBar={false} />
  ),
};

export const SequenceCollapsableWithInfoData: Story = {
  render: () => {
    const data = [
      {
        title: 'Item 1',
        content: <div>Some content</div>,
      },
      {
        title: 'Another item',
        content: <div>Some more content</div>,
      },
    ];
    return (
      <SequenceComponent
        sequence={sequenceData}
        infoData={data}
        isCollapsible
      />
    );
  },
};

const SequenceAsyncLoadRender = () => {
  const [sequence, setSequence] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const onShowSequence = async () => {
    setIsLoading(true);
    await sleep(2000);
    setSequence(sequenceData);
    setIsLoading(false);
  };

  return (
    <SequenceComponent
      sequence={sequence}
      isLoading={isLoading}
      onShowSequence={onShowSequence}
    />
  );
};

export const SequenceAsyncLoad = {
  render: SequenceAsyncLoadRender,
};

export const SequenceTools: Story = {
  render: ({ onBlastClick }) => (
    <SequenceToolsComponent accession="P05067" onBlastClick={onBlastClick} />
  ),
};
