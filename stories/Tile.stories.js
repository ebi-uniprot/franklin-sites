import React from 'react';
import { Tile } from '../src/components';

export default {
  title: 'Navigation|Tile',
  parameters: {
    purposeFunction: {
      purpose:
        'Advertise a specific dataset of the website and provide searchable access to it.',
      function:
        'Provide a sneak peak and navigate to a searchable data section of the website.',
    },
  },
};

export const tile = () => <Tile title="Title" namespace="uniref" />;
