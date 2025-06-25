import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { SequenceSubmission as SequenceSubmissionComponent } from '../src/components';

import { SequenceObject } from '../src/sequence-utils/sequence-processor';

const meta: Meta<typeof SequenceSubmissionComponent> = {
  title: 'Forms/Sequence Submission',
  component: SequenceSubmissionComponent,
};

export default meta;

type Story = StoryObj<typeof SequenceSubmissionComponent>;

export const SequenceSubmission: Story = {
  render: () => (
    <SequenceSubmissionComponent placeholder="Enter a sequence..." />
  ),
};

export const WithInvalidSequenceError: Story = {
  render: () => (
    <SequenceSubmissionComponent
      placeholder="Enter a sequence..."
      defaultValue="ACTGUACTGUACTGU+"
    />
  ),
};

const multipleSequences1 = `> sequence_1
ACTGUACTGUACTGU
> sequence_2
ACTGAUTTGUATTGUUUGU
`;
export const WithMultipleSequences: Story = {
  render: () => (
    <SequenceSubmissionComponent
      placeholder="Enter a sequence..."
      defaultValue={multipleSequences1}
    />
  ),
};

const multipleSequences2 = `> sequence_1
ACTGUACTGUACTGU
> sequence_2
ACTGAUTTGUATTGUUUGU
> sequence_3
ACTGUACTGUACTGU
`;
export const WithMultipleSequencesWarning: Story = {
  render: () => (
    <SequenceSubmissionComponent
      placeholder="Enter a sequence..."
      defaultValue={multipleSequences2}
    />
  ),
};

const multipleSequences3 = `> sequence_1
ACTGUACTGUACTGU`;
export const WithTooFewSequencesError: Story = {
  render: () => (
    <SequenceSubmissionComponent
      placeholder="Enter a sequence..."
      defaultValue={multipleSequences3}
      minimumSequences={2}
    />
  ),
};

const multipleSequences4 = `> sequence_1
ACTGUACTGUACTGU
> sequence_2
ACTGAUTTGUATTGUUUGU
> sequence_3
ACTGCTGUAGU
> sequence_4
GUACTGU
`;
export const WithTooManySequencesError: Story = {
  render: () => (
    <SequenceSubmissionComponent
      placeholder="Enter a sequence..."
      defaultValue={multipleSequences4}
      maximumSequences={3}
    />
  ),
};

const multipleSequences5 = `> sequence 1
ACTGUACTGUACTGU
> sequence 2
ACTGAUTTGUATTGUUUGU
> sequence 3
ACTGCTGUAGU
> sequence_4
GUACTGU
`;
export const WithDuplicateIdentifiersError: Story = {
  render: () => (
    <SequenceSubmissionComponent
      placeholder="Enter a sequence..."
      defaultValue={multipleSequences5}
      noDuplicateID
    />
  ),
};

const DynamicallyChangeValueRender = () => {
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

export const DynamicallyChangeValue: Story = {
  render: DynamicallyChangeValueRender,
};
