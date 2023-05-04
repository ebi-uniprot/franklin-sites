import { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { sleep } from 'timing-functions';

import { Sequence, SequenceTools, Button } from '../src';

import sequenceData from '../src/mock-data/sequence-data';

export default {
  title: 'Biocomponents/Sequence',
  parameters: {
    purposeFunction: {
      function: 'Display protein/nucleotide sequence, allow users to copy it',
      purpose: 'Allow users to see a protein / nucleotide sequence',
    },
  },
};

const AddToBasketButton = () => (
  <Button variant="tertiary" onClick={action('AddToBasketButton clicked')}>
    Add To Basket
  </Button>
);

export const sequence = () => (
  <Sequence
    sequence={sequenceData}
    accession="P05067"
    downloadUrl="https://wwwdev.ebi.ac.uk/uniprot/api/uniprotkb/accession/P05067.fasta"
    onBlastClick={action('onBlastClick')}
    addToBasketButton={<AddToBasketButton />}
  />
);
export const sequenceWithoutActionBar = () => (
  <Sequence sequence={sequenceData} showActionBar={false} />
);

export const sequenceCollapsableWithInfoData = () => {
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
  return <Sequence sequence={sequenceData} infoData={data} isCollapsible />;
};

export const SequenceAsyncLoad = () => {
  const [sequence, setSequence] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const onShowSequence = async () => {
    setIsLoading(true);
    await sleep(2000);
    setSequence(sequenceData);
    setIsLoading(false);
  };

  return (
    <Sequence
      sequence={sequence}
      isLoading={isLoading}
      onShowSequence={onShowSequence}
    />
  );
};

export const sequenceTools = () => (
  <SequenceTools accession="P05067" onBlastClick={action('onBlastClick')} />
);
