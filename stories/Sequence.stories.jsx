import React from 'react';
import { Sequence } from '../src/components';
import sequenceData from '../src/mock-data/sequence-data';

export default {
  title: 'Biocomponents|Sequence',
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
  />
);
