import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { action } from '@storybook/addon-actions';
import { sleep } from 'timing-functions';

import {
  Sequence as SequenceComponent,
  SequenceTools as SequenceToolsComponent,
  Button,
} from '../src/components';

import sequenceData from '../src/mock-data/sequence-data';

const AddToBasketButton = () => (
  <Button variant="tertiary" onClick={action('AddToBasketButton clicked')}>
    Add To Basket
  </Button>
);

const meta: Meta<typeof SequenceComponent> = {
  component: SequenceComponent,
  title: 'Biocomponents/Sequence',
  parameters: {
    purposeFunction: {
      function: 'Display protein/nucleotide sequence, allow users to copy it',
      purpose: 'Allow users to see a protein / nucleotide sequence',
    },
  },
};

export default meta;

type Story = StoryObj<typeof SequenceComponent>;

export const Sequence: Story = {
  render: () => (
    <SequenceComponent
      sequence={sequenceData}
      accession="P05067"
      downloadUrl="https://wwwdev.ebi.ac.uk/uniprot/api/uniprotkb/accession/P05067.fasta"
      onBlastClick={action('onBlastClick')}
      onCopy={action('onCopy')}
      addToBasketButton={<AddToBasketButton />}
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

export const SequenceTools = () => (
  <SequenceToolsComponent
    accession="P05067"
    onBlastClick={action('onBlastClick')}
  />
);
