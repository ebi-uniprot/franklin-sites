import React, { Fragment } from 'react';
import { action } from '@storybook/addon-actions';
import { Message } from '../src/components';
import { getLipsumSentences } from '../src/mock-data/lipsum';

export default {
  title: 'Layout|Message',
  parameters: {
    purposeFunction: {
      function:
        'Give the user some feedback about something happening (tool running, error) or time-boxed information about the website (downtime, etc.)',
      purpose:
        'They are noticeable but do not disrup the user experience. Some can be dismissed.',
    },
  },
};

export const defaultMessage = () => (
  <Message onDismiss={action('Dismiss')}>{getLipsumSentences()}</Message>
);
export const warningMessage = () => (
  <Message level="warning">{getLipsumSentences()}</Message>
);
export const failureMessage = () => (
  <Message level="failure">{getLipsumSentences()}</Message>
);
export const successMessage = () => (
  <Message level="success">{getLipsumSentences()}</Message>
);

const subtitle = (
  <Fragment>
    Try using <a href="#">BLAST</a>, <a href="#">Align</a>
    , <a href="#">ID Mapping/Retrieve</a> or{' '}
    <a href="#">Peptide Search to begin</a>
  </Fragment>
);

export const withSubtitle = () => (
  <Message
    level="warning"
    subtitle={subtitle}
    noIcon
  >
    {getLipsumSentences()}
  </Message>
);
