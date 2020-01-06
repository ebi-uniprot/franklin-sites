import React from 'react';
import { loremIpsum } from 'lorem-ipsum';
import { HeroContainer } from '../src/components';

export default {
  title: 'Data view/Hero Container',
  parameters: {
    purposeFunction: {
      purpose: 'Differentiate section from others',
      function: 'Highlight a specific section',
    },
  },
};

export const heroContainer = () => (
  <HeroContainer title="Title">
    {loremIpsum({ count: 25, units: 'words' })}
  </HeroContainer>
);
