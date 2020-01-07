import React from 'react';
import { loremIpsum } from 'lorem-ipsum';
import ButtonModal from '../src/components/button-modal';

export default {
  title: 'Data view/Modal',
  parameters: {
    purposeFunction: {
      purpose: '',
      function: '',
    },
  },
};

export const modal = () => (
  <ButtonModal buttonText="click me" title="My great modal window">
    {loremIpsum(45)}
  </ButtonModal>
);
