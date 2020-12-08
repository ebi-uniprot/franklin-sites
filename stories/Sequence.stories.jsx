import { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { Sequence } from '../src/components';
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

export const sequence = () => (
  <Sequence
    sequence={sequenceData}
    accession="P05067"
    downloadUrl="https://wwwdev.ebi.ac.uk/uniprot/api/uniprotkb/accession/P05067.fasta"
    onBlastClick={action('onBlastClick')}
    onAddToBasketClick={action('onAddToBasketClick')}
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

export const sequenceAsyncLoad = () => {
  const [sequence, setSequence] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const onShowSequence = () => {
    setIsLoading(true);
    setTimeout(() => {
      setSequence(sequenceData);
      setIsLoading(false);
    }, 2000);
  };
  return (
    <Sequence
      sequence={sequence}
      isLoading={isLoading}
      onShowSequence={onShowSequence}
    />
  );
};
