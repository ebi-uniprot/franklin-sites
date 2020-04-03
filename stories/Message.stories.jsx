import React from 'react';
import { Message } from '../src/components';
import { getLipsumSentences } from '../src/mock-data/lipsum';

export default {
  title: 'Layout|Message',
  parameters: {
    purposeFunction: {
      function: '',
      purpose: '',
    },
  },
};

export const defaultMessage = () => <Message>{getLipsumSentences()}</Message>;
export const warningMessage = () => (
  <Message level="warning">{getLipsumSentences()}</Message>
);
export const failureMessage = () => (
  <Message level="failure">{getLipsumSentences()}</Message>
);
export const successMessage = () => (
  <Message level="success">{getLipsumSentences()}</Message>
);
