import { loremIpsum } from 'lorem-ipsum';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';
import { HeroContainer } from '../src/components';

export default {
  title: 'Layout/Hero Container',
  decorators: [withKnobs()],
  parameters: {
    purposeFunction: {
      purpose: 'Differentiate section from others',
      function: 'Highlight a specific section',
    },
  },
};

export const heroContainer = () => (
  <HeroContainer
    title={text('Title', 'Title', 'Props')}
    noSidePadding={boolean('No side padding', false, 'Props')}
  >
    {loremIpsum({ count: 25, units: 'words' })}
  </HeroContainer>
);
