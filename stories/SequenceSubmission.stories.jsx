import React, { useState } from 'react';
import { SequenceSubmission } from '../src/components';

export default {
  title: 'Forms|Sequence Submission',
  parameters: {
    purposeFunction: {
      function:
        'Accepts a sequence from user',
      purpose:
        'Enable input validation on sequences entered by the user',
    },
  },
};

export const sequenceSubmission = () => <SequenceSubmission
    placeholder="Enter a sequence..."
  />;

export const withInvalidSequenceError = () => <SequenceSubmission
    placeholder="Enter a sequence..."
    defaultValue="ACTGUACTGUACTGU+"
  />;

export const dynamicallyChangeValue = () => {
  const [sequence, setSequence] = useState('ACTG');

  return (
    <form>
      <SequenceSubmission
        placeholder="Enter a sequence..."
        value={sequence}
        onChange={e => setSequence(e.sequence)}
      />
      <label>
        Sequence:
        <output>{sequence}</output>
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
