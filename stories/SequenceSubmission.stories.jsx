import React from 'react';
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

export const withTooShortSequenceError = () => <SequenceSubmission
    placeholder="Enter a sequence..."
    value="ACTG"
  />;

export const withInvalidSequenceError = () => <SequenceSubmission
    placeholder="Enter a sequence..."
    value="ACTGUACTGUACTGU+"
  />;

export const withMissingSequenceError = () => <SequenceSubmission
    placeholder="Enter a sequence..."
    value="      "
  />;
