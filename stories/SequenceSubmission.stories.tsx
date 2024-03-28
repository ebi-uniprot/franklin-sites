import { useState } from 'react';

import { SequenceSubmission as SequenceSubmissionComponent } from '../src/components';

import { SequenceObject } from '../src/sequence-utils/sequence-processor';

export default {
  title: 'Forms/Sequence Submission',
  parameters: {
    purposeFunction: {
      function: 'Accepts a sequence from user',
      purpose: 'Enable input validation on sequences entered by the user',
    },
  },
};

export const SequenceSubmission = () => (
  <SequenceSubmissionComponent placeholder="Enter a sequence..." />
);

export const WithInvalidSequenceError = () => (
  <SequenceSubmissionComponent
    placeholder="Enter a sequence..."
    defaultValue="ACTGUACTGUACTGU+"
  />
);

const multipleSequences1 = `> sequence_1
ACTGUACTGUACTGU
> sequence_2
ACTGAUTTGUATTGUUUGU
`;
export const WithMultipleSequences = () => (
  <SequenceSubmissionComponent
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
export const WithMultipleSequencesWarning = () => (
  <SequenceSubmissionComponent
    placeholder="Enter a sequence..."
    defaultValue={multipleSequences2}
  />
);

export const DynamicallyChangeValue = () => {
  const [sequence, setSequence] = useState('ACTG');
  const [likelyType, setLikelyType] = useState<SequenceObject['likelyType']>();

  return (
    <form>
      <SequenceSubmissionComponent
        placeholder="Enter a sequence..."
        value={sequence}
        onChange={(event) => {
          setSequence(event[0]?.sequence);
          setLikelyType(event[0]?.likelyType);
        }}
      />
      <p>
        Sequence:
        <output>{sequence}</output>
      </p>
      <p>
        Likely type:
        <output>{likelyType}</output>
      </p>
      <input
        type="reset"
        onClick={(e) => {
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
