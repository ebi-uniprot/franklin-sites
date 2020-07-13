import React, { useState } from 'react';
import { SequenceSubmission } from '../src/components';

export default {
  title: 'Forms|Sequence Submission',
  parameters: {
    purposeFunction: {
      function: 'Accepts a sequence from user',
      purpose: 'Enable input validation on sequences entered by the user',
    },
  },
};

export const sequenceSubmission = () => (
  <SequenceSubmission placeholder="Enter a sequence..." />
);

export const withInvalidSequenceError = () => (
  <SequenceSubmission
    placeholder="Enter a sequence..."
    defaultValue="ACTGUACTGUACTGU+"
  />
);

const multipleSequences1 = `> sequence_1
ACTGUACTGUACTGU
> sequence_2
ACTGAUTTGUATTGUUUGU
`;
export const withMultipleSequences = () => (
  <SequenceSubmission
    placeholder="Enter a sequence..."
    defaultValue={multipleSequences1}
  />
);

const multipleSequences2 = `> sequence_1
ACTGUACTGUACTGU
> sequence_2
ACTGAUTTGUATTGUUUGU
> sequence_3
ACTGUACTGUACTGU
`;
export const withMultipleSequencesWarning = () => (
  <SequenceSubmission
    placeholder="Enter a sequence..."
    defaultValue={multipleSequences2}
  />
);

export const dynamicallyChangeValue = () => {
  const [sequence, setSequence] = useState('ACTG');
  const [likelyType, setLikelyType] = useState(null);

  return (
    <form>
      <SequenceSubmission
        placeholder="Enter a sequence..."
        value={sequence}
        onChange={e => {
          setSequence(e.sequence);
          setLikelyType(e.likelyType);
        }}
      />
      <label>
        Sequence:
        <output>{sequence}</output>
      </label>
      <label>
        Likely type:
        <output>{likelyType}</output>
      </label>
      <input
        type="reset"
        onClick={e => {
          e.preventDefault();
          setSequence('');
        }}
      />
      <input
        type="button"
        value="async load sequence"
        onClick={() => setSequence('ACTGUACTGUACTGU')}
      />
    </form>
  );
};
